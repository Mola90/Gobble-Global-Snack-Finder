
const router = require('express').Router();
// const commentRoutes = require('./comment-route');
const ratingRoutes = require('./rating-route');
const searchRoutes = require('./search-route');
const userRoutes = require('./user-route');
const snackRoute = require('./snack-route');
const countryRoute = require('./country-route');
const categoryRoute = require('./category-route');
const wishlistRoute = require('./wishlist-route');
const likeRoute = require('./like-route')

// router.use('/comment', commentRoutes);
router.use('/rating', ratingRoutes);
router.use('/search', searchRoutes);
router.use('/user', userRoutes);
router.use('/snack', snackRoute);
router.use('/country', countryRoute);
router.use('/category', categoryRoute)
router.use('/snack', snackRoute);
router.use('/wishlist', wishlistRoute);
router.use('/like', likeRoute);

module.exports = router;