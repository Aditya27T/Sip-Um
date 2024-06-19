const { Report, ReportVote } = require('../models');
const logger = require('../../helpers/utils/logger');
const { Op } = require('sequelize');
const fs = require('fs');
const path = require('path');
const __basedir = path.resolve(path.dirname(''));

// findAllNewReports paginated with count limit 10 and offset 0
const findAllReports = async (limit, offset) => {
    try {
        const reports = await Report.findAndCountAll({
            [Op.or]: [ { createdAt: { [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000) } } ],
            limit,
            offset
        });
        return reports.rows.length ? reports : logger.error('Reports not found', 404);
    }
    catch (err) {
        console.log(err);
        return logger.error('Something went wrong', 500);
    }
}

// findReport by id and get total votes
const findReport = async (id) => {
    try {
        const report = await Report.findOne({ where: { id } });
        if (!report) {
            return logger.error('Report not found', 404);
        }
        const totalVotes = report.totalUpvotes - report.totalDownvotes;
        return { report, totalVotes };
    }
    catch (err) {
        console.log(err);
        return logger.error('Something went wrong', 500);
    }
}

// findAllReportsByUserId paginated with count limit 4 and offset 0
const findAllReportsByUserId = async (userId, limit, offset) => {
    try {
        const reports = await Report.findAndCountAll({
            where: {
                userId
            },
            limit,
            offset
        });
        return reports.rows.length ? reports : logger.error('Reports not found', 404);
    }
    catch (err) {
        console.log(err);
        return logger.error('Something went wrong', 500);
    }
}

// findAllReportsByStatus paginated with count limit 10 and offset 0
const findAllReportsByStatus = async (status, limit, offset) => {
    try {
        const reports = await Report.findAndCountAll({
            where: {
                status
            },
            limit,
            offset
        });
        return reports.rows.length ? reports : logger.error('Reports not found', 404);
    }
    catch (err) {
        console.log(err);
        return logger.error('Something went wrong', 500);
    }
}

// findAllReportsByCategory paginated with count limit 4 and offset 0
const findAllReportsByCategory = async (category, limit, offset) => {
    try {
        const reports = await Report.findAndCountAll({
            where: {
                category
            },
            [Op.or]: [ { createdAt: { [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000) } } ], // [Op.or]: [ { createdAt: { [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000) } }
            limit,
            offset
        });
        return reports.rows.length ? reports : logger.error('Reports not found', 404);
    }
    catch (err) {
        console.log(err);
        return logger.error('Something went wrong', 500);
    }
}


// updateReport by id
const updateReport = async (id, data) => {
    try {
        const report = await Report.update(data, { where: { id } });
        if (!report) {
            return logger.error('Report not found', 404);
        }
        const result = await Report.findByPk(id);
        if (!result) {
            return logger.error('Report not found', 404);
        }
        return result ? result : logger.error('Report not found', 404);
    }
    catch (err) {
        console.log(err);
        return logger.error('Something went wrong', 500);
    }
}

// createReport
const createReport = async (data, images) => {
    try {
        if (!data.image) {
            return logger.error('Image is required', 400);
        }
        const report = await Report.create(data);
        if (!report) {
            return logger.error('Report not found', 404);
        }
        if (images) {
            const { image } = images ?? {};
            if (image && typeof image === 'object' && image.path) {
                const imagePath = path.join('/uploads/images', image.path.split('\\').pop());
                fs.renameSync(image.path, imagePath);
                await Report.update({ image: imagePath }, { where: { id: report.id } });
            }
        }
        return report ? report : logger.error('Report not found', 404);
    } catch (err) {
        console.log(err);
        return logger.error('Something went wrong', 500);
    }
}

// deleteReport by id
const deleteReport = async (id) => {
    try {
        const report = await Report.destroy({ where: { id } });
        if (!report) {
            return logger.error('Report not found', 404);
        }
        return report ? report : logger.error('Report not found', 404);
    }
    catch (err) {
        console.log(err);
        return logger.error('Something went wrong', 500);
    }
}

// upvoteReport by id and total vote will be increased by 1
const voteReport = async (userId, reportId, voteType) => {
    try {
        // Check if the user has already voted for this report
        const existingVote = await ReportVote.findOne({ where: { userId, reportId } });

        if (existingVote) {
            return logger.error('User has already voted for a report', 400);
        }

        const report = await Report.findByPk(reportId);
        if (!report) {
            return logger.error('Report not found', 404);
        }

        if (voteType === 'upvote') {
            if (report.totalDownvotes === 0) {
                report.totalUpvotes += 1;
            }
            report.totalUpvotes += 1;
        } else if (voteType === 'downvote') {
            if (report.totalUpvotes === 0) {
                report.totalDownvotes += 1;
            }
            report.totalDownvotes += 1;
        } else {
            return logger.error('Invalid vote type');
        }
        // totalVotes upvotes - downvotes
        await report.save();

        // Create a new vote record for the user and report
        await ReportVote.create({
            userId,
            reportId,
            downvoted: voteType === 'downvote' ? true : false
        });
        const totalVotes = report.totalUpvotes - report.totalDownvotes;
        return { 
            total : totalVotes, 
            message: 'Report voted' 
        };
    } catch (err) {
        console.log(err);
        return logger.error('Something went wrong', 500);
    }
}

// find by total votes and order by largest total vote
const trendingAllReports = async () => {
    try {
        const reports = await Report.findAll({
            order: [
                [Report.sequelize.literal('totalUpvotes - totalDownvotes'), 'DESC']
            ],
            attributes: ['id', 'title', 'description', 'location', 'category', 'status',  'totalUpvotes', 'totalDownvotes', [Report.sequelize.literal('totalUpvotes - totalDownvotes'), 'totalVotes']]
        });
        return reports.length ? reports : logger.error('Reports not found', 404);
    }
    catch (err) {
        console.log(err);
        return logger.error('Something went wrong', 500);
    }
}

// searchReports by title, description, location, category
const searchReports = async (search, limit, offset) => {
    try {
        const reports = await Report.findAndCountAll({
            where: {
                [Op.or]: [
                    {
                        title: {
                            [Op.like]: `%${search}%`
                        }
                    },
                    {
                        description: {
                            [Op.like]: `%${search}%`
                        }
                    },
                    {
                        location: {
                            [Op.like]: `%${search}%`
                        }
                    }
                ]
            },
            limit: parseInt(limit),
            offset: parseInt(offset)
        });
        return reports.rows.length ? reports : logger.error('Reports not found', 404);
    }
    catch (err) {
        console.log(err);
        return logger.error('Something went wrong', 500);
    }
}

module.exports = {
    findAllReports,
    findReport,
    findAllReportsByUserId,
    findAllReportsByStatus,
    findAllReportsByCategory,
    updateReport,
    createReport,
    deleteReport,
    voteReport,
    trendingAllReports,
    searchReports
};