const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Snack_Country extends Model {}

//I AM A THROUGH TABLE

Snack_Country.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
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
    modelName: 'snack_country',
  }
);

module.exports = Snack_Country;