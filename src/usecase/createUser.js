const User = require('../entity/User');

class CreateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(name, email) {
        const user = new User({ name, email });
        return await this.userRepository.save(user);
    }
};

module.exports = CreateUser;