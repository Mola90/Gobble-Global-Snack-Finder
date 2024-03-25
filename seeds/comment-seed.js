// Import the Comment model
const { Comment } = require('../Models');

// Seed data for comments
const commentData = [
  {
    comment_text: "This snack is amazing!",
    date_created: new Date(),
    user_id: 1, 
    snack_id: 1,
  },
  {
    comment_text: "I love this snack!",
    date_created: new Date(),
    user_id: 2, 
    snack_id: 1, 
  },
  {
    comment_text: "Not my favorite snack.",
    date_created: new Date(),
    user_id: 3, 
    snack_id: 2, 
  },
  
];

// Function to seed the database with comment data
const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
