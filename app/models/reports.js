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
      // define association here
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
    category: { 
      type: DataTypes.ENUM('kerusakan', 'kehilangan'),
      allowNull: false
    },
    image: { type: DataTypes.STRING, allowNull: false},
    totalUpvotes: { type: DataTypes.INTEGER, allowNull: false},
    totalDownvotes: { type: DataTypes.INTEGER, allowNull: false},
    userId: { type: DataTypes.INTEGER, allowNull: false},
  }, {
    sequelize,
    modelName: 'reports',
    tableName: 'reports'
    
  });
  return reports;
};