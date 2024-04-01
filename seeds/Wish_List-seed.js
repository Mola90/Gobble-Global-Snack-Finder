const Wishlist = require("../Models/Wish-List");
// const  wishlist  = require("../models/Wish-List");

const listData = [
    {
        user_id: 1,
        snack_id: 1
    },
    {
        user_id: 2,
        snack_id: 2

    },
    {
        user_id: 1,
        snack_id: 3

    },
    {
        user_id: 1,
        snack_id: 4
    },
    {
        user_id: 2,
        snack_id: 4

    },
    {
        user_id: 2,
        snack_id: 3

    },
 
];

const wishListSeed = async () => {
    await Wishlist.bulkCreate(listData);
}

module.exports = wishListSeed;
