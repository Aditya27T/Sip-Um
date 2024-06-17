const models = require('../models');
const { error } = require('../../helpers/utils/logger');
const wrapper = require('../../helpers/utils/wrapper');
const bcrypt = require('bcrypt');

const login = async (username, password) => {
    try {
        const user = await models.User.findOne({
            where: { username },
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        });

        if (!user) {
            wrapper.error(res, 'User not found', null, 404);
            error('Login', 'User not found');
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return error('Login', 'Password not match');
        }
    } catch (err) {
        error('Login', err.message, err);
    }
}

module.exports = {
    login
};