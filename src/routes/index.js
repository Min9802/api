const siteRoute = require('./site.route');
const memberRoute = require('./member.route');
function route(app) {
    //site route

    app.get('/about', siteRoute);
    app.get('/post', siteRoute);

    //member route
    app.post('/login', memberRoute);

    app.get('/', siteRoute);
}
module.exports = route;
