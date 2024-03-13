class UserRepository {
    constructor() {
        this.users = [];
        this.schema = require('../schemas/user.schema');
        this.logger = require('../../lib/utils/logger')
    }


    async save(user) {
        try {
            const userModel = new this.schema(user);
            const newUser = await userModel.save();
            return newUser;
        } catch (error) {
            if (error.code === 11000) {
                this.logger.error(`User ${user.email} already exists`);
                throw ({ message: "Email already exists" });
            } else if (error.name === 'ValidationError') {
                this.logger.error(`Error creating user ${user.email}`);
                throw ({ message: error.message });
            } else {
                this.logger.error(`Error creating user ${user.email}`);
                throw ({ message: error.message });
            }
        }
    };

    async findAll() {
        try {
            const users = await this.schema.find({});
            return users;
        } catch (error) {
            throw ({ message: error.message });
        }
    }
}

module.exports = UserRepository;