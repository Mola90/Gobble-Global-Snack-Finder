// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Comment extends Model {}

// Comment.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     comment_text: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     date_created: {
//       type: DataTypes.DATE,
//       allowNull: false,
//       defaultValue: DataTypes.NOW,
//     },
//     user_id: { 
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'user',
//         key: 'id'
//       }
//     },
//     snack_id: { 
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'snack',
//         key: 'id'
//       }
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'Comment',
//   }
// );

// module.exports = Comment;