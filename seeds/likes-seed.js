const { Like } = require('../Models'); // Import the Like model

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
  },  
  {
    user_id: 1, 
    snack_id: 4, 
  },
  {
    user_id: 1, 
    snack_id: 11, 
  },
  {
    user_id: 1, 
    snack_id: 12, 
  },
  {
    user_id: 1, 
    snack_id: 13, 
  },
  {
    user_id: 1, 
    snack_id: 14, 
  },
  {
    user_id: 1, 
    snack_id: 15, 
  },
  {
    user_id: 1, 
    snack_id: 16, 
  },
  {
    user_id: 1, 
    snack_id: 17, 
  },
  {
    user_id: 1, 
    snack_id: 18, 
  },
  {
    user_id: 1, 
    snack_id: 19, 
  },
  {
    user_id: 1, 
    snack_id: 20, 
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
