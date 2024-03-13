const { UserEntity } = require('../entities/user.entity');

exports.createUserInteractor = async ({ createUserPersistence }, { username, password }) => {
    const user = new UserEntity({ username, password });
    user.validate();
    return await createUserPersistence(user);
}