const User = require('../Models/User')

const userData = [
    {
        username: 'Karl',
        email: 'karl@email.com',
        password: 'karl1998',
        country_id: 1,
        DOB: new Date(),
        profile_picture: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thesprucepets.com%2Fthmb%2FUN-3dWdFGVf6560C2ei6yRJ437g%3D%2F1080x1080%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2F25013611_549953118686668_6857785409783463936_n-5a47b6ae482c520036d52a17.jpg&f=1&nofb=1&ipt=9e1382504098d2fbd9d0265f776848d8f8d9474538cae6547c3a49774bf1a3c7&ipo=images" 
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