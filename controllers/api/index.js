<<<<<<< HEAD
const router = require('express').Router();
const commentRoutes = require('./comment-route');
const ratingRoutes = require('./rating-route');
const searchRoutes = require('./search-route');
const snackRoutes = require('./snack-route');
const userRoutes = require('./user-route');


router.use('/comment', commentRoutes);
router.use('/rating', ratingRoutes);
router.use('/search', searchRoutes);
router.use('/snack', snackRoutes);
router.use('/user', userRoutes);


=======
const router = require('express').Router();
const snackRoutes = require('./snack-route');


router.use('/snack', snackRoutes);

>>>>>>> main
module.exports = router;