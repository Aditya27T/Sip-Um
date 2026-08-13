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
      // 
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
    tableName: 'reports_progress'
  });
  return reports_progres;
};