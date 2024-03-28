const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Item extends Model {}


Item.init(
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
        model: "User",
        key: "id",
        unique: false,
      }
    },
    snack_id:{
      type: DataTypes.INTEGER,
      references:{
        model: "Snack",
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
    modelName: 'item',
  }
);

module.exports = Item;