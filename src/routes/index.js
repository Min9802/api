const siteRoute = require('./site.route');
const adminRoute = require('./admin.route');
function route(app) {

    //admin route
    app.use('/admin', adminRoute);

    //site route
    app.use('/about', siteRoute);
    app.use('/post', siteRoute);
    app.use('/home', siteRoute);


    app.use('/', siteRoute);
}
module.exports = route;
