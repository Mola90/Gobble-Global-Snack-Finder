const seedComments = require('./comment-seed');

const sequelize = require('../config/connection');

const seedCountries = require('./country-seed');
const seedCategories = require('./category-seed');
const seedUsers = require('./user-seed')

const seedAll = async () => {
  await sequelize.sync({ force: true });
 
  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);

  seedCategories();

  seedCountries();

  seedUsers();
};

seedAll();
