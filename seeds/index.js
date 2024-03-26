const sequelize = require('../config/connection');

const seedCountries = require('./country-seed');
const seedCategories = require('./category-seed');
const seedUsers = require('./user-seed')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  seedCategories();

  seedCountries();

  seedUsers();
};

seedAll();
