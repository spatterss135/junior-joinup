'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserProject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserProject.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'cascade'
      })
      UserProject.belongsTo(models.User, {
        foreignKey: 'project_id',
        onDelete: 'cascade'
      })
    }
  }
  UserProject.init({
    user_id: {type:DataTypes.INTEGER, allowNull: false},
    project_id: {type:DataTypes.INTEGER, allowNull: false},
    role: {type:DataTypes.STRING, allowNull: false},
  }, {
    sequelize,
    modelName: 'UserProject',
    tableName: 'user_projects',
    timestamps: false
  });
  return UserProject;
};