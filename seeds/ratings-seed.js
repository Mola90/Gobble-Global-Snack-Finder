const Ratings = require('../Models/Ratings')

const ratingsData = [
    {
        user_rating: 1,
        text_review: "This is the worst",
        review_title: "Why I hate this!",
        date_created: new Date(),
        snack_id: 1,
        user_id: 1
    },
    {
        user_rating: 5,
        text_review: "This is the best",
        review_title: "Why I love this!",
        date_created: new Date(),
        snack_id: 2,
        user_id: 1
    },
]

const seedRatings = async () => {
    await Ratings.bulkCreate(ratingsData);
}

module.exports = seedRatings;