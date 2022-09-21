'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Project, {
        foreignKey: "creator_id",
        as: "created_projects",
        onDelete: 'cascade'
      })
      User.hasMany(models.UserProject,  {
        foreignKey: "user_id",
        onDelete: 'cascade'
      })
      User.hasMany(models.UserTech, {
        foreignKey: 'user_id',
        onDelete: 'cascade'
      })
    }
  }
  User.init({
    name: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
  });
  return User;
};