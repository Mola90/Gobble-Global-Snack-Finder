const Country = require('../../seeds/country-seed');

async function renderCountries() {
    try {
        const countries = await Country.findAll();

        const template = Handlebars.compile(fs.readFileSync('../../views/signup-handlebars', 'utf8')); 
        const renderedHtml = template({ countries });

        return renderedHtml;
    } catch (error) {
        console.error('Error fetching countries:', error);
        return ''; 
    }
}

module.exports = renderCountries;
