'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      reports.belongsTo(models.users, {
        foreignKey: 'userId',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      reports.hasMany(models.reports_progres, {
        foreignKey: 'reportId',
        as: 'reports_progres',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      reports.hasMany(models.report_votes, {
        foreignKey: 'reportId',
        as: 'report_votes',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  reports.init({
    title: { type: DataTypes.STRING, allowNull: false},
    description: { type: DataTypes.STRING, allowNull: false},
    location: { type: DataTypes.STRING, allowNull: false},
    status: { 
      type: DataTypes.ENUM('pending', 'on progress', 'completed'),
      allowNull: false,
      defaultValue: 'pending'
    },
    image: { type: DataTypes.STRING, allowNull: false},
    userId: { type: DataTypes.INTEGER, allowNull: false},
  }, {
    sequelize,
    modelName: 'reports',

  });
  return reports;
};