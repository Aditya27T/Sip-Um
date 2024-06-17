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
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'First name cannot be null' },
        notEmpty: { msg: 'First name is required' }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Last name cannot be null' },
        notEmpty: { msg: 'Last name is required' }
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
        isUmEmail(value) {
          if (!value.endsWith('@students.um.ac.id')) {
            throw new Error('Email must be from UM students domain');
          }
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Role cannot be null' },
        notEmpty: { msg: 'Role is required' }
      },
      defaultValue: 'student',
      isIn: {
        args: [['student', 'lecturer', 'admin']],
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
    emailVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};