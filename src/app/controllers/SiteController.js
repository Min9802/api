const Admin = require('../models/Admin');
const Post = require('../models/Post');
const Menu = require('../models/Menu');
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
  //[GET] /home
  index(req, res, next) {
    Menu.find({})
      .then((menus) => {
        res.render('home', {
          menus: multipleMongooseToObject(menus),
        });
      })
      .catch(next);
  }
  //[GET] /about
  about(req, res, next) {
    Menu.find({})
      .then((menus) => {
        res.render('about', {
          menus: multipleMongooseToObject(menus),
        });
      })
      .catch(next);
  }
  post(req, res, next) {
    Menu.find({})
      .then((menus) => {
        Post.find({})
          .then((posts) => {
            res.render('post', {
              menus: multipleMongooseToObject(menus),
              posts: multipleMongooseToObject(posts),
            });
          })
          .catch(next);
      })
      .catch(next);
  }
}
module.exports = new SiteController();
