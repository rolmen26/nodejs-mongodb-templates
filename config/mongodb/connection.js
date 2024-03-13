const mongoose = require('mongoose');
const dotenv = require('dotenv');
const logger = require('../../lib/utils/logger');

dotenv.config();

const uri = process.env.MONGODB_URI;

const connect = async () => {
    try {
        await mongoose.connect(uri, {});
        logger.info('Connected to MongoDB');
    } catch (error) {
        logger.error('Error connecting to MongoDB:', error);
    }
}

const close = async () => {
    try {
        await mongoose.connection.close();
        logger.info('Disconnected from MongoDB');
    } catch (error) {
        logger.error('Error disconnecting from MongoDB:', error);
    }
}

/**
 * @param connection Connection to MongoDB
 */
const Connection = mongoose.connection;

module.exports = { connect, close, Connection };