const { Model, DataTypes } = require('sequelize');
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
    brand_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    snack_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "user",
        key: "id"
      }
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'snack',
  }
);

module.exports = Snack;