const ex = require('express');
const router = ex.Router();
const us = require('../app/controllers/auth.controller');
const jwtAuth = require('../middleware/jwtAuth');

router.post('/login', us.login);
router.get('/google-login', us.googleLogin);
router.get('/callback-login', us.callbackLogin);
router.get('/profile/:id', jwtAuth.verifyToken, us.profile);
router.put('/change-password/:id', jwtAuth.verifyToken, us.changePassword);


module.exports = router;