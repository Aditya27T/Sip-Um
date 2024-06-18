const models = require('../models');
const { error } = require('../../helpers/utils/logger');
const logger = require('../../helpers/utils/logger');
const { google } = require('googleapis');
const bcrypt = require('bcrypt');
const config = require('../../config/auth.config.cjs');

const OauthClient = new google.auth.OAuth2(
    config.oauth.google.clientID,
    config.oauth.google.clientSecret,
    config.oauth.google.redirectUri
);


const autorizeUrl = OauthClient.generateAuthUrl({
    access_type: 'offline',
    scope: ['email', 'profile'],
    include_granted_scopes: true
});

// google login
const googleLogin = async () => {
    return autorizeUrl;
}
// callback login
const callbackLogin = async (code) => {
    try {
        const { tokens } = await OauthClient.getToken(code);
        OauthClient.setCredentials(tokens);
        const oauth2 = google.oauth2({ version: 'v2', auth: OauthClient });
        const { data } = await oauth2.userinfo.get();

        const user = await models.User.findOne({ where: { email: data.email } });
        if (!user) {
            const newUser = await models.User.create({
                email: data.email,
                username: data.name,
                password: null
            });
            return newUser;
        }

        return user;
    } catch (err) {
        return logger.error('Something went wrong', 500);
    }
}

// login user with email and password
const login = async (email, password) => {
    try {
        const user = await models.User.findOne({ where: { email } });
        console.log(user.password);
        if (!user) {
            return logger.error('User not found', 404);
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return logger.error('Invalid password', 400);
        }
        return user;
    }
    catch (err) {
        error(err);
        return logger.error('Something went wrong', 500);
    }
}

const me = async (id) => {
    try {
        const user = await models.User.findByPk(id);
        if (!user) {
            return logger.error('User not found', 404);
        }
        return user;
    } catch (err) {
        console.log(err);
        return logger.error('Something went wrong', 500);
    }
}

const changePassword = async (id, password) => {
    try {
        const genSalt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, genSalt);
        const user = await models.User.update({ password }, { where: { id } });
        if (!user) {
            return logger.error('User not found', 404);
        }
        const result = await models.User.findByPk(id);
        if (!result) {
            return logger.error('User not found', 404);
        }
        return result   
    }
    catch (err) {
        console.log(err);
        return logger.error('Something went wronag', 500);
    }
}

const findUser = async (id) => {
    try {
        const user = await models.User.findByPk(id);
        if (!user) {
            return logger.error('User not found', 404);
        }
        return logger.data(user);
    }
    catch (err) {
        error(err);
        return logger.error('Something went wrong', 500);
    }
}

const logout = async (code) => {
    const { tokens } = await OauthClient.getToken(code);
    
    OauthClient.revokeToken(tokens);
    
    return logger.data('Logout success');
}

module.exports = {
    login,
    googleLogin,
    callbackLogin,
    me,
    changePassword,
    findUser,
    logout
};