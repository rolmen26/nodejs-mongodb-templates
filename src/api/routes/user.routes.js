const router = require('express').Router();

const UserController = require('../controllers/user.controller');

const UserRepository = require('../../repository/user.repository');

const CreateUser = require('../../usecase/createUser');

const userRepository = new UserRepository();

const createUser = new CreateUser(userRepository);

const userController = new UserController(createUser);

router.post('/users', userController.create.bind(userController));

module.exports = router;