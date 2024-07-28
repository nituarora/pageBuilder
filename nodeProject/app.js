const express = require('express');
const cors = require('cors');
const httpStatus = require('http-status');
const routes = require('./src/route');
const bodyParser = require('body-parser')
process.env.PWD = process.cwd();

const app = express();

// enable cors
app.use(cors());
app.options('*', cors());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
const maxRequestBodySize = '50mb';
app.use(bodyParser.json({ limit: maxRequestBodySize }));
app.use(bodyParser.urlencoded({ limit: maxRequestBodySize, extended: true }));

const { dirname } = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
    res.status(200).send('Congratulations! API is working!');
});
app.use('/api', routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});


module.exports = app;