const User = require('../app/controllers/user.controller');
const Ex = require('express');
const Router = Ex.Router();

Router.get('/', User.findAllUsers);
Router.get('/:id', User.findUser);
Router.put('/:id', User.updateUser);
Router.delete('/:id', User.deleteUser);

module.exports = Router;