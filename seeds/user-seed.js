const User = require('../Models/User')

const userData = [
    {
        username: 'Karl',
        email: 'karl@email.com',
        password: 'karl1998',
        country_id: 1
    },
    {
        username: 'lrak',
        email: 'lrak@email.com',
        password: 'lrak1998',
        country_id: 1
    }
]

const seedUser = async () => {
    await User.bulkCreate(userData);
}

module.exports = seedUser;