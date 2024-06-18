'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class report_vote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      report_vote.belongsTo(models.users, {
        foreignKey: 'userId',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      report_vote.hasMany(models.reports, {
        foreignKey: 'reportId',
        as: 'report',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  report_vote.init({
    userId: { type: DataTypes.INTEGER, allowNull: false},
    reportId: { type: DataTypes.INTEGER, allowNull: false},
  }, {
    sequelize,
    modelName: 'report_vote',
    indexes: [
      {
        unique: true,
        fields: ['userId', 'reportId']
      }
    ]
  });
  return report_vote;
};