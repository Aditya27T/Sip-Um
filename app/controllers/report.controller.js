const repository = require('../repositories/reports.repository');
const { validationResult } = require('express-validator');

// findAllReports paginated with count limit 10 and offset 0
const findAllReports = async (req, res) => {
    try {
        const reports = await repository.findAllReports(10, 0);
        return res.status(200).json({ message: 'Reports found', data: reports });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

// findReport by id
const findReport = async (req, res) => {
    try {
        const report = await repository.findReport(req.params.id);
        return res.status(200).json({ message: 'Report found', data: report });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

// findAllReportsByUserId paginated with count limit 4 and offset 0
const findAllReportsByUserId = async (req, res) => {
    try {
        const reports = await repository.findAllReportsByUserId(req.params.userId, 4, 0);
        return res.status(200).json({ message: 'Reports found', data: reports });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

// findAllReportsByStatus paginated with count limit 10 and offset 0
const findAllReportsByStatus = async (req, res) => {
    try {
        const reports = await repository.findAllReportsByStatus(req.params.status, 10, 0);
        return res.status(200).json({ message: 'Reports found', data: reports });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

// findAllReportsByCategory paginated with count limit 10 and offset 0
const findAllReportsByCategory = async (req, res) => {
    try {
        const reports = await repository.findAllReportsByCategory(req.params.category, 4, 0);
        return res.status(200).json({ message: 'Reports found', data: reports });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

// createReport
const createReport = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send({ message: 'Please upload a file!' });
        }
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ message: 'Validation error', errors: errors.array() });
        }
        // add req.file image path to req.body
        req.body.image = req.file ? req.file.path : '';
        const report = await repository.createReport(req.body, req.file);
        return res.status(201).json({ message: 'Report created', data: report });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

// updateReport by id
const updateReport = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ message: 'Validation error', errors: errors.array() });
        }
        const report = await repository.updateReport(req.params.id, req.body);
        return res.status(200).json({ message: 'Report updated', data: report });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

// deleteReport by id
const deleteReport = async (req, res) => {
    try {
        const report = await repository.deleteReport(req.params.id);
        return res.status(200).json({ message: 'Report deleted', data: report });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

// voteReport
const voteReport = async (req, res) => {
    try {
        const { userId, reportId, v } = req.query;
        const report = await repository.voteReport(userId, reportId, v);
        console.log(report);
        if (!report) {
            return res.status(404).json({ message: 'Report not found' });
        } 
        return res.status(200).json({ message: 'Report voted', data: report });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

// trendingAllReports by largest total vote, total vote formula = total upvotes - total downvotes
const trendingAllReports = async (req, res) => {
    try {
        const reports = await repository.trendingAllReports(20, 0);
        if (!reports) {
            return res.status(404).json({ message: 'Reports not found' });
        } else {
            return res.status(200).json({ message: 'Reports found', data: reports });
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

// searchReports by title, description, location, category and pagination and count limit from query
const searchReports = async (req, res) => {
    try {
        const reports = await repository.searchReports(req.query.search, req.query.limit, req.query.offset);
        return res.status(200).json({ message: 'Reports found', data: reports });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

module.exports = {
    findAllReports,
    findReport,
    findAllReportsByUserId,
    findAllReportsByStatus,
    findAllReportsByCategory,
    createReport,
    updateReport,
    deleteReport,
    voteReport,
    trendingAllReports,
    searchReports
}
