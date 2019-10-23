const { Router } = require('express');

const router = Router();

// routes
router.use('/user', require('./user.route'));

module.exports = router;
