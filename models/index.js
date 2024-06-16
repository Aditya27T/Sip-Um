'use strict';

const Sequelize = require('sequelize');
const env = require('../config/db.config.js').env;
const { dev, test, production } = require('../config/db.config.js');

/**
 * for models import 
 */
// const User = require('./user.model.js');

const connection = env === 'dev' ? dev : env === 'test' ? test : production;

/**
 * initialize sequelize
 */
const sequelize = new Sequelize(connection.database, connection.username, connection.password, {
  host: connection.host,
  dialect: connection.dialect,
  logging: connection.logging,
  define: {
    timestamps: false
  }, 
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

/**
 * initialize models
 */
const db = {};


/**
 * import models
 */
// db.User = User(sequelize, Sequelize);

/**
 * export db object
 */
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
