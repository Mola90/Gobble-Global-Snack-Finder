const seedComments = require('./comment-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
 
  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);

  
};

seedAll();
