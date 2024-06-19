const user = require('../repositories/user.repository');
const logger = require('../../helpers/utils/logger');
const { validationResult } = require('express-validator');

const findAllUsers = async (req, res) => {
    try {
        const users = await user.findAllUsers(10, 0);
        if (!users) {
            return res.status(404).json({
                data: null,
                message: 'Users not found'
            });
        }
        return res.status(200).json({
            data: users,
            message: 'Users found successfully',
            pagination: {
                limit: 4,
                offset: 0
            }
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json('Something went wrong');
    }
}

// findUser by id
const findUser = async (req, res) => {
    try {
        const id = req.params.id;
        const users = await user.findUser(id);
        if (!users) {
            return res.status(404).json({
                data: null,
                message: 'User not found'
            });
        }
        return res.status(200).json({
            data: users,
            message: 'User found successfully'
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json('Something went wrong');
    }
}

// updateUser by id
const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        if (!req.body) {
            return res.status(400).json({
                data: null,
                message: 'Invalid request'
            });
        }
        const users = await user.updateUser(id, req.body);
        return res.status(200).json({
            data: users,
            message: 'User updated successfully'
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json('Something went wrong');
    }
}

// deleteUser by id
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const users = await user.deleteUser(id);
        return res.status(users.statusCode).json({
            data: users,
            message: "User deleted successfully"
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json('Something went wrong');
    }
}

module.exports = {
    findAllUsers,
    findUser,
    updateUser,
    deleteUser
};