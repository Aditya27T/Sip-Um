'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: 'Username cannot be null' },
        notEmpty: { msg: 'Username is required' }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: 'Email cannot be null' },
        notEmpty: { msg: 'Email is required' },
        // only allow email format @students.um.ac.id
        isEmail: {
          msg: 'Invalid email format'
        },
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Role cannot be null' },
        notEmpty: { msg: 'Role is required' }
      },
      defaultValue: 'user',
      isIn: {
        args: [['user', 'admin']],
        msg: 'Invalid role'
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Password cannot be null' },
        notEmpty: { msg: 'Password is required' }
      }
    },
    emailVerifiedat: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        isDate: { msg: 'Invalid date format' }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  });
  return User;
};