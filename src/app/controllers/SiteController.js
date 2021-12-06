const Admin = require('../models/Admin');

class SiteController {
    //[GET] /home
    index(req, res) {

        Admin.find({}, function (err, admins) {
            if(!err) {
                res.json({admins});
            }else{
                res.status(400).json({error: 'ERROR !!!'});
            }
            
        });
        // res.render('home');
    }
    //[GET] /about
    about(req, res) {
        res.render('about');
    }
}
module.exports = new SiteController();
