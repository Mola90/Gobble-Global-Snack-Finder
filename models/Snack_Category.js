const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Snack_Category extends Model {}

//I AM A THROUGH TABLE

Snack_Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
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
        allowNull: true,
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
    modelName: 'snack_category',
  }
);

module.exports = Snack_Category;