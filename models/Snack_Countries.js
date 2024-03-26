const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Snack_Countries extends Model {}

//I AM A THROUGH TABLE

Snack_Countries.init(
  {
    country_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'country',
            key: 'id'
        }
    },
    snack_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'snack',
            key: 'id'
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'snack_countries',
  }
);

module.exports = Snack_Countries;