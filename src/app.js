const express = require('express');
const dotenv = require('dotenv');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./api/routes');

dotenv.config();

const app = express();

app.use(compression());
app.use(morgan('common'));
app.use(express.json());
app.use(helmet());
app.use(cors());


app.get("/", (req, res) => {
    res.send({ message: "Hello World!" });
});

app.use(routes.userRoutes);

module.exports = app;