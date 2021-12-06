const siteRoute = require('./site.route');
const memberRoute = require('./member.route');
function route(app) {
    //site route

    app.use('/about', siteRoute);

    //member route
    app.use('/login', memberRoute);

    app.use('/', siteRoute);
}
module.exports = route;
