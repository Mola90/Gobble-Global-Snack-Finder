// Join Table for users and lists. colum call list type added.

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Wishlist extends Model {}


Wishlist.init(
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
        
      }
    },
    snack_id:{
      type: DataTypes.INTEGER,
      references:{
        model: "Snack",
        key: "id",
        
      },

    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'list',
  }
);


module.exports = Wishlist;
