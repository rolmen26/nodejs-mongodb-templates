class UserRepository {
    constructor() {
        this.users = [];
    }

    save(user) {
        this.users.push(user);
        return user;
    }
}

module.exports = UserRepository;