const { Like } = require('../models'); // Import the Like model

const likesData = [
  {
    user_id: 1, 
    snack_id: 1, 
  },
  {
    user_id: 2, 
    snack_id: 2, 
  },
  {
    user_id: 1, 
    snack_id: 3, 
  },
  {
    user_id: 2, 
    snack_id: 1, 
  },  {
    user_id: 1, 
    snack_id: 4, 
  },

];


const seedLikes = async () => {
  try {
    // Bulk create the likes data
    await Like.bulkCreate(likesData);

    console.log('Likes seeded successfully');
  } catch (error) {
    console.error('Error seeding likes:', error);
  }
};

module.exports = seedLikes;
