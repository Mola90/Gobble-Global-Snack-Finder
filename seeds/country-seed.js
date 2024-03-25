const { Country } = require('../models');

const countryData = [
    {
        country_name: 'Australia',
    },
    {
        country_name: 'United States',
    },
    {
        country_name: 'France',
    },
    {
        country_name: 'Germany',
    },
    {
        country_name: 'Italy',
    },
    {
        country_name: 'Greece',
    },
    {
        country_name: 'Spain',
    },
    {
        country_name: 'United Kingdom',
    },
    {
        country_name: 'China',
    },
    {
        country_name: 'Japan',
    },
    {
        country_name: 'Korea',
    },
    {
        country_name: 'Vietnam',
    },
    {
        country_name: 'Sweden',
    },
    {
        country_name: 'Belgium',
    },
    {
        country_name: 'Mexico',
    },
    {
        country_name: 'Brazil',
    },
    {
        country_name: 'South Africa',
    },
    {
        country_name: 'Nigeria',
    },
    {
        country_name: 'Morocco',
    },
    {
        country_name: 'India',
    },
    {
        country_name: 'Russia',
    },
    {
        country_name: 'Iran',
    },
    {
        country_name: 'Pakistan',
    },
    {
        country_name: 'Lebanon',
    },
    {
        country_name: 'Argentina',
    },
    {
        country_name: 'Venezuela',
    },

];

const seedCountries = async () => {
    await Country.bulkCreate(countryData);
}

module.exports = seedCountries;