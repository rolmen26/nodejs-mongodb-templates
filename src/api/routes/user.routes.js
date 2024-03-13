const router = require('express').Router();
const { createUser } = require('../controllers/user.controller');

router.post('/user', createUser);

module.exports = router;