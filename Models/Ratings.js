const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Rating extends Model {}

Rating.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    text_review: {
      type: DataTypes.TEXT
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    review_title: {
      type: DataTypes.TEXT
    },
    snack_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "snack",
        key: "id"
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'rating',
  }
);

module.exports = Rating;