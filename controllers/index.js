const router = require('express').Router();

const apiRoutes = require('./api');

//Add additional routes here
router.use('/api', apiRoutes);

module.exports = router;
