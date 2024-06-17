const express = require('express');
const router = express.Router();
const controller = require('../app/controllers/auth.controller');
const { jwtAuth } = require('../middleware/jwtAuth');

router.post('/login', controller.login);


module.exports = router;
