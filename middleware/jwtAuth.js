const jsonwebtoken = require('jsonwebtoken');
const { error } = require('../helpers/utils/logger');
const { JWT_SECRET } = require('../config/auth.config.cjs');
const wrapper = require('../helpers/utils/wrapper');
const { User } = require('../app/models');

/**
 * Middleware to authenticate user using JWT
 * 
 */

const jwtAuth = { 
    async verifyToken(req, res, next) {
        const token = req.session.token;

        if (!token) {
            return wrapper.response(res, 401, 'Unauthorized!');
        }

        jsonwebtoken.verify(token, JWT_SECRET, async (err, decoded) => {
            if (err) {
                return wrapper.response(res, 401, 'Unauthorized!');
            }
            const user = await User.findByPk(decoded.id);
            if (!user) {
                return res.status(404).send({ message: 'User not found' });
            }
            req.user = user;
            next();
        });
    }
}

module.exports = jwtAuth;