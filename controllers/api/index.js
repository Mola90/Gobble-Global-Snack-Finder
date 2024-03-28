
const router = require('express').Router();
const commentRoutes = require('./comment-route');
const ratingRoutes = require('./rating-route');
const searchRoutes = require('./search-route');
const userRoutes = require('./user-route');
const snackRoutes = require('./snack-route')

router.use('/comment', commentRoutes);
router.use('/rating', ratingRoutes);
router.use('/search', searchRoutes);
router.use('/user', userRoutes);
router.use('/snack', snackRoutes);

module.exports = router;