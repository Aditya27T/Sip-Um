const repository = require('../repositories/auth.repository');
const wrapper = require('../../helpers/utils/wrapper');
const jwt = require('jsonwebtoken');
const JWT = require('../../config/auth.config.cjs');

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return wrapper.error(res, 'Username or password cannot be empty', null, 400);
        } 

        const user = await repository.login(username, password);
        if (!user) {
            return wrapper.error(res, 'Login failed', null, 401);
        } 

        const token = jwt.sign({ id: user.id }, JWT[process.env.NODE_ENV].secret, { expiresIn: JWT[process.env.NODE_ENV].expiresIn });
        return wrapper.data(res, { token }, 'Login success', 200);
    } catch (err) {
        return wrapper.error(res, err.message, err, 500);
    }
}

module.exports = {
    login
};