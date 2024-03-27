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
      autoIncrement: true,
      primaryKey: true
    },
    category_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'category',
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
    modelName: 'snack_category',
  }
);

module.exports = Snack_Category;