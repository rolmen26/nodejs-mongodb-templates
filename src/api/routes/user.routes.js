const router = require('express').Router();

const UserController = require('../controllers/user.controller');

const UserRepository = require('../../repository/user.repository');

const CreateUser = require('../../usecase/createUser');

const FindAllUsers = require('../../usecase/findAllUsers');

const userRepository = new UserRepository();

const createUser = new CreateUser(userRepository);

const findAllUsers = new FindAllUsers(userRepository);

const userController = new UserController(createUser, findAllUsers);

router.post('/users', userController.create.bind(userController));

router.get('/users', userController.index.bind(userController));

module.exports = router;