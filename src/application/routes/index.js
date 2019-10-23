const { Router } = require('express');

const router = Router();

// routes
router.use('/users', require('./user.route'));

module.exports = router;
