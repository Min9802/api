const Admin = require('../models/Admin');
const Post = require('../models/Post');
const Menu = require('../models/Menu');
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    //[GET] /home
    index(req, res, next) {
        Admin.find({})
        .then (admins => res.json(admins))
        .catch (next);
        // res.render('home');
    }
    //[GET] /about
    about(req, res) {
        res.render('about');
    }
    post(req, res, next) {
        Post.find({})
        .then (posts => {
            res.render('post', {
                posts: multipleMongooseToObject(posts)
            });
        })
        .catch (next);
    }
}
module.exports = new SiteController();
