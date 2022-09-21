'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tech extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tech.hasMany(models.UserTech, {
        foreignKey: 'tech_id',
        onDelete: 'cascade'
      })
    }
  }
  Tech.init({
    name: {type:DataTypes.STRING, allowNull: false},
    language: {type:DataTypes.STRING, allowNull: false},
  }, {
    sequelize,
    modelName: 'Tech',
    tableName: 'techs',
    timestamps: false
  });
  return Tech;
};