'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserTech extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserTech.belongsTo(models.User, 
        {
          foreignKey: 'user_id',
          onDelete: 'cascade'
        }
        )
      UserTech.belongsTo(models.Tech, 
        {
          foreignKey: 'tech_id',
          onDelete: 'cascade'
        }
        )  
    }
  }
  UserTech.init({
    user_id: {type:DataTypes.INTEGER, allowNull: false},
    tech_id: {type:DataTypes.INTEGER, allowNull: false},
    competency: {type:DataTypes.STRING, allowNull: false},
  }, {
    sequelize,
    modelName: 'UserTech',
    tableName: 'user_techs',
    timestamps: false
  });
  return UserTech;
};