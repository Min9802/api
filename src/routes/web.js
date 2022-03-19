let express = require('express');
let router = express.Router();
let ApiRoute = require('./apiRoute');


let initWebRouters = (app) => {
    app.use('/api/v1', ApiRoute);
    app.use('/', router);
}
module.exports = initWebRouters;