'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reports_progres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      reports_progres.belongsTo(models.users, {
        foreignKey: 'userId',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      reports_progres.belongsTo(models.reports, {
        foreignKey: 'reportId',
        as: 'report',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  reports_progres.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    reportId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'reports_progres',
  });
  return reports_progres;
};