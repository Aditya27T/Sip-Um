const express = require('express');
const router = express.Router();
const user = require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Hello World!',
    message: '<h1>Hello World!</h1>'
  });
});

/*user*/
router.get('/user', user);

module.exports = router;
