const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Like extends Model {}


Like.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id:{
      type: DataTypes.INTEGER,
      references:{
        model: "user",
        key: "id",
        unique: false,
      }
    },
    snack_id:{
      type: DataTypes.INTEGER,
      references:{
        model: "snack",
        key: "id",
        unique: false,
      },

    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'like',
  }
);

module.exports = Like;