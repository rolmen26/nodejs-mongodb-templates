const User = require('../entity/User');

class CreateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    execute(name, email) {
        const user = new User(name, email);
        return this.userRepository.save(user);
    }
};

module.exports = CreateUser;