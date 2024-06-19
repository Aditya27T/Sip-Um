const express = require('express');
const router = express.Router();
const wrapper = require('../helpers/utils/wrapper');

router.get('/', (req, res) => {
  return wrapper.response(res, 200, 'Welcome to SIP API', 200)
});

router.use('/auth', require('./auth'));
router.use('/users', require('./user'));
router.use('/reports', require('./reports'));

module.exports = router;
