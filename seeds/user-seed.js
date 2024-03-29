const User = require('../Models/User')

const userData = [
    {
        username: 'Karl',
        email: 'karl@email.com',
        password: 'karl1998',
        country_id: 1,
        DOB: new Date()
    },
    {
        username: 'lrak',
        email: 'lrak@email.com',
        password: 'lrak1998',
        country_id: 1,
        DOB: new Date()
    }
]

const seedUser = async () => {
    await User.bulkCreate(userData);
}

module.exports = seedUser;