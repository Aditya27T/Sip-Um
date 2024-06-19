"use strict";

const Sequelize = require("sequelize");
const env = require("../../config/app.config.cjs").app.env;
const { development, test, production } = require("../../config/db.config.cjs");

/**
 * for models import
 */
const User = require("./user.js");
const Report = require("./reports.js");
const ReportVote = require("./report_vote.js");
const ReportProgress = require("./reports_progres.js");

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
db.Report = Report(sequelize, Sequelize.DataTypes);
db.ReportVote = ReportVote(sequelize, Sequelize.DataTypes);
db.ReportProgress = ReportProgress(sequelize, Sequelize.DataTypes);


/**
 * define associations
 */
db.User.hasMany(db.Report, { 
  foreignKey: 'userId',
  as: 'reports',
  onDelete: 'CASCADE',
  hooks: true,
  onUpdate: 'CASCADE',
});
db.Report.belongsTo(db.User, {
  foreignKey: 'userId',
  as: 'user',
  onDelete: 'CASCADE',
  hooks: true,
  onUpdate: 'CASCADE',
});
db.User.hasMany(db.ReportProgress, {
  foreignKey: 'userId',
  as: 'reports_progress',
  onDelete: 'CASCADE',
  hooks: true,
  onUpdate: 'CASCADE',
});
db.ReportProgress.belongsTo(db.User, {
  foreignKey: 'userId',
  as: 'user',
  onDelete: 'CASCADE',
  hooks: true,
  onUpdate: 'CASCADE',
});

db.Report.hasMany(db.ReportProgress, {
  foreignKey: 'reportId',
  as: 'reports_progress',
  onDelete: 'CASCADE',
  hooks: true,
  onUpdate: 'CASCADE',
});

db.ReportProgress.belongsTo(db.Report, {
  foreignKey: 'reportId',
  as: 'report',
  onDelete: 'CASCADE',
  hooks: true,
  onUpdate: 'CASCADE',
});

db.User.hasMany(db.ReportVote, {
  foreignKey: 'userId',
  as: 'report_votes',
  onDelete: 'CASCADE',
  hooks: true,
  onUpdate: 'CASCADE',
});

db.ReportVote.belongsTo(db.User, {
  foreignKey: 'userId',
  as: 'user',
  onDelete: 'CASCADE',
  hooks: true,
  onUpdate: 'CASCADE',
});

db.Report.hasMany(db.ReportVote, {
  foreignKey: 'reportId',
  as: 'report_votes',
  onDelete: 'CASCADE',
  hooks: true,
  onUpdate: 'CASCADE',
});

db.ReportVote.belongsTo(db.Report, {
  foreignKey: 'reportId',
  as: 'report',
  onDelete: 'CASCADE',
  hooks: true,
  onUpdate: 'CASCADE',
});

/**
 * export db object
 */
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
