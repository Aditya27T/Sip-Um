const jsonwebtoken = require('jsonwebtoken');
const { error } = require('../helpers/utils/logger');
const { secret } = require('../config/auth.config.cjs');
const wrapper = require('../helpers/utils/wrapper');
const { User } = require('../app/models');

/**
 * Middleware to authenticate user using JWT
 * 
 */

const jwtAuth = { 
    async verifyToken(req, res, next) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                return res.status(403).send({
                    message: 'No token provided!'
                });
            }
            const decoded = jsonwebtoken.verify(token, secret);
            const user = await User.findOne({ where: { id: decoded.id } });
            if (!user) {
                return wrapper.response(res, 404, 'User not found', null);
            }

            req.user = user;
            next();
        
        } catch (err) {
            return res.status(401).send({
                message: 'Unauthorized!'
            });
        }
    }
}

module.exports = jwtAuth;