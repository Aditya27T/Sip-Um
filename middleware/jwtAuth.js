const jsonwebtoken = require('jsonwebtoken');
const { error } = require('../helpers/utils/logger');
const { JWT_SECRET } = require('../config/auth.config.cjs');
const wrapper = require('../helpers/utils/wrapper');
const { User } = require('../models');

/**
 * Middleware to authenticate user using JWT
 * 
 */

const jwtAuth = async (req, res, next) => {
    let token = req.session.token;

    if(!token) {
        return wrapper.error(res, 'Invalid Token', null, 403);
    } 

    try {
        const decoded = jsonwebtoken.verify(token, JWT_SECRET);
        const user = await User.findOne({ where: { id: decoded.id } });

        if(!user) {
            return wrapper.error(res, 'Unauthorized', null, 401);
        }

        req.user = user;
        next();
    } catch (err) {
        error('jwtAuth', err.message, err);
        return wrapper.error(res, 'Bad Request', null, 400);
    }
}

module.exports = jwtAuth;