const repository = require('../repositories/auth.repository');
const jwt = require('jsonwebtoken');
const JWT = require('../../config/auth.config.cjs');
const logger = require('../../helpers/utils/logger');
const e = require('express');


// google login
const googleLogin = async (req, res) => {
    const response = await repository.googleLogin();
    return res.status(200).redirect(response);
};

// google callback login
const callbackLogin = async (req, res) => {
    const { code } = req.query;
    const response = await repository.callbackLogin(code);
    if (!response) {
        return res.status(500).send({ message: 'Something went wrong' });
    }

    const payload = {
        id: response.id,
        email: response.email,
        username: response.username 
    };
    const token = jwt.sign(payload, JWT.secret, { expiresIn: JWT.expiresIn });

    return res.status(200).json({ 
        id: response.id,
        email: response.email,
        username: response.username,
        token
    });
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const response = await repository.login(email, password);
    if (!response) {
        return res.status(404).send({ message: 'User not found' });
    }
    const token = jwt.sign({ id: response.id }, JWT.secret, { expiresIn: JWT.expiresIn });
    response.token = token;
    return res.status(200).json({
        data:{
            id: response.id,
            email: response.email,
            username: response.username
        },
        token
    });
}

const profile = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await repository.me(id);
        if (!response) {
            return res.status(404).send({ message: 'User not found' });
        }
        return res.status(200).send(response);
    } catch (err) {
        return res.status(500).send({ message: 'Something went wrong' });
    }
}

const changePassword = async (req, res) => {
    try {
        const id = req.params.id;
        const { password } = req.body;
        if (!password || password === '') {
            return res.status(400).send({ message: 'Password is required' });
        }
        if (password.length < 6) {
            return res.status(400).send({ message: 'Password must be at least 6 characters' });
        }
        const response = await repository.changePassword(id, password);
        return res.status(200).json(
            { message: 'Password has been updated' }
        );
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: 'Something went wrong' });
    }
}


module.exports = {
    googleLogin,
    callbackLogin,
    login,
    profile,
    changePassword
};