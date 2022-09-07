'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Project.belongsTo(models.User, {
        foreignKey: 'creator_id',
        as: 'creator',
        onDelete: 'cascade',
      })
      Project.hasMany(models.UserProject,  {
        foreignKey: "project_id",
        onDelete: 'cascade'
      })
    }
  }
  Project.init({
    name: {type: DataTypes.STRING, allowNull: false},
    status: {type: DataTypes.STRING, allowNull: false},
    creator_id: {type: DataTypes.INTEGER, allowNull: false},
  }, {
    sequelize,
    modelName: 'Project',
    tableName: 'projects',
    timestamps: true
  });
  return Project;
};