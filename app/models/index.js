"use strict";

const Sequelize = require("sequelize");
const env = require("../../config/app.config.cjs").app.env;
const { development, test, production } = require("../../config/db.config.cjs");

/**
 * for models import
 */
const User = require("./user.js");

const connection =
  env === "development" ? development : env === "test" ? test : production;

/**
 * initialize sequelize
 */
const sequelize = new Sequelize(
  connection.database,
  connection.username,
  connection.password,
  {
    host: connection.host,
    port: connection.port,
    dialect: "mysql",
    logging: connection.logging,
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

/**
 * initialize models
 */
const db = {};

/**
 * import models
 */
db.User = User(sequelize, Sequelize.DataTypes);

/**
 * define associations
 */
db.User.associate(db);

/**
 * export db object
 */
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
