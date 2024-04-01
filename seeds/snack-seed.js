const Snack = require('../Models/Snack')

const snackData = [
    {
        snack_name: 'Maltesers',
        brand_name: 'Mars',
        snack_image: 'https://www.maltesers.com.au/sites/g/files/fnmzdf1086/files/2022-04/maltesers_140_au2.png',
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'Snickers',
        brand_name: 'Mars',
        snack_image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.worldofsnacks.com%2Fuploads%2F1%2F3%2F1%2F2%2F13127180%2Fs643667121527569464_p60_i1_w640.jpeg&f=1&nofb=1&ipt=97697e3c4b4689f733b23c9b7034942378f9a45ab5cc91b82504ac8643e1559e&ipo=images",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'Hot Cross Buns',
        brand_name: 'Kytons',
        snack_image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkytonsbakery.com.au%2Fwp-content%2Fuploads%2F2020%2F07%2FHot-Cross-Buns_12-Pack-w-buns-lo-res.jpg&f=1&nofb=1&ipt=8d7e6e11cc3549f8864ac7e33e6ad966f6a4d14e68c405455e70c5089d503fb9&ipo=images",
        user_id: 1,
        date_created: new Date()
    },
    {
        snack_name: 'Fruchocs Milk',
        brand_name: 'Menz',
        snack_image: "https://www.menz.com.au/cdn/shop/products/FruChocs_150g_large.png?v=1689750754",
        user_id: 1,
        date_created: new Date()
    }
]

const seedSnack = async () => {
    await Snack.bulkCreate(snackData);
}

module.exports = seedSnack;