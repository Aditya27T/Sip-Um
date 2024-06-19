const express = require('express');
const controller = require('../app/controllers/report.controller');
const uploaders = require('../middleware/uploader');
const uploadFile = require('../middleware/uploader');

const router = express.Router();

// findAllReports paginated with count limit 10 and offset 0
router.get('/', controller.findAllReports);

// findReport by id
router.get('/:id', controller.findReport);

// findAllReportsByUserId paginated with count limit 4 and offset 0
router.get('/user/:userId', controller.findAllReportsByUserId);

// findAllReportsByStatus paginated with count limit 10 and offset 0
router.get('/status/:status', controller.findAllReportsByStatus);

// findAllReportsByCategory paginated with count limit 10 and offset 0
router.get('/category/:category', controller.findAllReportsByCategory);

// createReport
router.post('/add', uploadFile.single('image'), controller.createReport);

// updateReport by id
router.put('/:id',   controller.updateReport);

// deleteReport by id
router.delete('/:id',  controller.deleteReport);

// voteReport
router.post('/vote?',  controller.voteReport);

// trendingAllReports by largest total vote, total vote formula = total upvotes - total downvotes
router.get('/trending/sort',  controller.trendingAllReports);

// searchReports by title, description, location, category and pagination and count limit from query
router.get('/all/search',  controller.searchReports);

module.exports = router;