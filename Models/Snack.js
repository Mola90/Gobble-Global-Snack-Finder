const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Snack extends Model {}

Snack.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    snack_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    locations_id: {
        type: DataTypes.INTEGER,

    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Snack',
  }
);

module.exports = Snack;