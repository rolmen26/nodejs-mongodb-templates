const app = require('./src/app');
const dotenv = require('dotenv');
const http = require('http');
const logger = require('./lib/utils/logger');
const { connection } = require('./config/mongodb');

dotenv.config();

const port = process.env.PORT || 3005;

const server = http.createServer(app);

server.listen(port, async () => {
    logger.info(`Server running on port ${port}`);
    await connection.connect();
});