const { checkConnectionStatus, connection } = require('../../config/mongodb');

exports.createUserPersistence = async ({ username, password }) => {
    try {
        if (checkConnectionStatus() != 'Connected') {
            throw new Error('Database is not connected');
        }
        const collection = connection.Connection.collection('users');

        const existingUser = await collection.findOne({
            username
        });

        if (existingUser) {
            throw new Error('User already exists');
        }

        const user = await collection.insertOne({
            username,
            password
        });

        return user;
    } catch (error) {
        throw error;
    };
}