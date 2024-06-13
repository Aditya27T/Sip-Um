const express = require('express');
const router = express.Router();
const user = require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Selamat Datang di Aplikasi Node.js',
    message: 'Silahkan klik menu user untuk melihat data user'
  });
});

/*user*/
router.get('/user', user);

module.exports = router;
