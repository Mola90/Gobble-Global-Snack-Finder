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
    {
        user_rating: 5,
        text_review: "It gets you Drunk!",
        review_title: "Why I love this!",
        date_created: new Date(),
        snack_id: 15,
        user_id: 1
    },
    {
        user_rating: 5,
        text_review: "Tastes good with a beer",
        review_title: "Why I love this!",
        date_created: new Date(),
        snack_id: 11,
        user_id: 1
    },
    {
        user_rating: 4,
        text_review: "Feels like home",
        review_title: "Why I love this!",
        date_created: new Date(),
        snack_id: 12,
        user_id: 1
    },
    {
        user_rating: 1,
        text_review: "It taste bad but i still eat them",
        review_title: "Why I love this!",
        date_created: new Date(),
        snack_id: 13,
        user_id: 1
    },
    {
        user_rating: 5,
        text_review: "Can't stop having theses",
        review_title: "Why I love this!",
        date_created: new Date(),
        snack_id: 14,
        user_id: 1
    },
]

const seedRatings = async () => {
    await Ratings.bulkCreate(ratingsData);
}

module.exports = seedRatings;