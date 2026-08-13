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
      // define association here
    }
  }
  report_vote.init({
    userId: { type: DataTypes.INTEGER, allowNull: false},
    reportId: { type: DataTypes.INTEGER, allowNull: false},
    downvoted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'report_vote',
    tableName: 'report_votes',
    indexes: [
      {
        unique: true,
        fields: ['userId', 'reportId']
      }
    ]
  });
  return report_vote;
};