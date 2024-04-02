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
    {
        user_rating: 5,
        text_review: "Can't stop having theses",
        review_title: "Why I love this!",
        date_created: new Date(),
        snack_id: 15,
        user_id: 1
    },
    {
        user_rating: 4,
        text_review: "Reminds me of my childhood",
        review_title: "Why I love this!",
        date_created: new Date(),
        snack_id: 16,
        user_id: 1
    },
    {
        user_rating: 5,
        text_review: "Obsessed with this!",
        review_title: "Why I love this!",
        date_created: new Date(),
        snack_id: 17,
        user_id: 1
    },
    {
        user_rating: 5,
        text_review: "Love this!",
        review_title: "Why I love this!",
        date_created: new Date(),
        snack_id: 18,
        user_id: 1
    },
    {
        user_rating: 4,
        text_review: "So Delicious",
        review_title: "Why I love this!",
        date_created: new Date(),
        snack_id: 19,
        user_id: 1
    },
    {
        user_rating: 5,
        text_review: "Chocolate frog biscuits are the best!",
        review_title: "Why I love this!",
        date_created: new Date(),
        snack_id: 20,
        user_id: 1
    },
    {
        user_rating: 5,
        text_review: "they are soooo addicting!",
        review_title: "lifechanging",
        date_created: new Date(),
        snack_id: 21,
        user_id: 1
    },
    {
        user_rating: 5,
        text_review: "always hit the spot!",
        review_title: "Classic",
        date_created: new Date(),
        snack_id: 22,
        user_id: 1
    },
    {
        user_rating: 2,
        text_review: "not bad, but could be better",
        review_title: "They are okay?",
        date_created: new Date(),
        snack_id: 23,
        user_id: 1
    },
    {
        user_rating: 4,
        text_review: "one of my favourite cookies!!",
        review_title: "so good!",
        date_created: new Date(),
        snack_id: 24,
        user_id: 1
    },
    {
        user_rating: 3,
        text_review: "they are kind of bland",
        review_title: "Could be better!",
        date_created: new Date(),
        snack_id: 25,
        user_id: 1
    },
    {
        user_rating: 4,
        text_review: "These are amazing!",
        review_title: "Surprised!!",
        date_created: new Date(),
        snack_id: 26,
        user_id: 1
    },
    {
        user_rating: 5,
        text_review: "wish there was more in the packet!",
        review_title: "So good!",
        date_created: new Date(),
        snack_id: 27,
        user_id: 1
    },
    {
        user_rating: 5,
        text_review: "eating the marshmellows are the best part!",
        review_title: "My childhood!",
        date_created: new Date(),
        snack_id: 28,
        user_id: 1
    },
    {
        user_rating: 3,
        text_review: "ive had better choclate but these are still good",
        review_title: "good!",
        date_created: new Date(),
        snack_id: 29,
        user_id: 1
    },
    {
        user_rating: 5,
        text_review: "I want to try every flavour!",
        review_title: "Amazing!!",
        date_created: new Date(),
        snack_id: 30,
        user_id: 1
    },
]

const seedRatings = async () => {
    await Ratings.bulkCreate(ratingsData);
}

module.exports = seedRatings;