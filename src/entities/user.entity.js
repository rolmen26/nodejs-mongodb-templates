exports.UserEntity = class UserEntity {
    constructor({ username, password }) {
        this.username = username;
        this.password = password;
    }

    validate() {
        if (!this.username || !this.password) {
            throw new Error('Username and password are required');
        }
    }
}