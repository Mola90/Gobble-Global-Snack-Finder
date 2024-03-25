const router = require('express').Router();
const snackRoutes = require('./snack-route');


router.use('/snack', snackRoutes);

module.exports = router;