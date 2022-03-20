const express = require('express');
const router = express.Router();
const ApiRoute = require('./apiRoute');


let initWebRouters = (app) => {
    app.use('/api/v1', ApiRoute);
    app.use('/', router);
}
module.exports = initWebRouters;