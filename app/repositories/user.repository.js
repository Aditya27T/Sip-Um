const models = require('../models').User;
const logger = require('../../helpers/utils/logger');
const bcrypt = require('bcrypt');

// findAllUsers paginated with count limit 4 and offset 0
const findAllUsers = async (limit, offset) => {
    try {
        const users = await models.findAndCountAll({
            limit,
            offset
        });
        return users.rows.length ? users : logger.error('Users not found', 404);
    }
    catch (err) {
        console.log(err);
        return logger.error('Something went wrong', 500);
    }
}

// findUser by id
const findUser = async (id) => {
    try {
        const user = await models.findByPk(id);
        return user ? user : logger.error('User not found', 404);
    }
    catch (err) {
        console.log(err);
        return logger.error('Something went wrong', 500);
    }
}

// updateUser by id
const updateUser = async (id, data) => {
    try {
        const password = data.password;
        const gensalt = bcrypt.genSaltSync(10);
        password ? data.password = bcrypt.hashSync(password, gensalt) : null;
        const user = await models.update(data, { where: { id } });
        if (!user) {
            return logger.error('User not found', 404);
        }
        const result = await models.findByPk(id);
        if (!result) {
            return logger.error('User not found', 404);
        }
        return result ? result : logger.error('User not found', 404);
    }
    catch (err) {
        console.log(err);
        return logger.error('Something went wrong', 500);
    }
}

// deleteUser by id
const deleteUser = async (id) => {
    try {
        const user = await models.destroy({ where: { id } });
        if (!user) {
            return logger.error('User not found', 404);
        }
        return logger.log('User deleted successfully', 200);
    }
    catch (err) {
        console.log(err);
        return logger.error('Something went wrong', 500);
    }
}

module.exports = {
    findAllUsers,
    findUser,
    updateUser,
    deleteUser
}