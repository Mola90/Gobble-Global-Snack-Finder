
//const seedComments = require('./comment-seed');

const sequelize = require('../config/connection');

const seedCountries = require('./country-seed');
const seedCategories = require('./category-seed');
const seedUsers = require('./user-seed');
const seedSnacks = require('./snack-seed');
const seedSnackCountry = require('./snack_country-seed');
const seedSnackCategories = require('./snack_categories-seed');
const seedRatings = require('./ratings-seed');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCountries();

  await seedUsers();
  
  await seedSnacks();

  await seedCategories();

  await seedSnackCountry();

  await seedSnackCategories();

  await seedRatings();
};

seedAll();
