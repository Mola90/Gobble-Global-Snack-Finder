const router = require('express').Router();
const snackRoutes = require('./snack-route');
const ratingRoutes = require('./rating-route')


router.use('/snack', snackRoutes);
router.use('/rating', ratingRoutes)

module.exports = router;