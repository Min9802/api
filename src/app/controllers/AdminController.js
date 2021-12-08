const Admin = require('../models/Admin');
const Post = require('../models/Post');
const Menu = require('../models/Menu');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {
  multipleMongooseToObject
} = require('../../util/mongoose');
const {
  RSA_X931_PADDING
} = require('constants');

class AdminController {
  //

  index(req, res, next) {
    if (req.body.token || req.session.admin) {
      res.render(path.join('admins', 'home'), {
        layout: 'backend',
      });
    } else {
      return res.redirect('admin/login');
    }
  }
  show(req, res, next) {
    switch (req.params.slug) {
      case 'home':
        router.get('home', function (req, res, next) {
          res.render(path.join('admins', 'home'), {
            layout: 'backend',
          });
        });
        break;
      case 'login':
        if (req.session && req.session.admin) {
          return res.json({
            err: 'You must be logout before re-login.'
          });
        } else {
          res.render(path.join('admins', 'login'), {
            layout: 'backend',
          });
        }
        break;
      // case 'logout':
      //   AdminController.logout
      // break;
    }
  }
  auth(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    Admin.findOne({
        username: username
      })
      .then((admin) => {
        if (admin) {
          bcrypt.compare(password, admin.password, function (err, result) {
            if (err) {
              res.json({
                error: err,
              });
            }
            if (result) {
              let token = jwt.sign({
                  username: admin.username
                },
                'verySecretValue', {
                  expiresIn: '1h'
                },
              );
              req.session.admin = admin,
                res.json({
                  message: 'Login Successfully !',
                  token,
                  admin,
                });
            } else {
              res.json({
                message: 'Password does not match !',
              });
            }
          });
        } else {
          res.json({
            message: 'No Account Found!',
          });
        }
      })
      .catch(next);
  }
  logout(req, res, next) {
    if (req.session) {
      // delete session object
      req.session.destroy(function (err) {
        if (err) {
          return next(err);
        } else {
          return res.redirect('/admin');
        }
      });
    }
  }
  store(req, res, next) {
    bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
      if (err) {
        res.json({
          error: err,
        });
      }
    });
    let admin = new Admin({
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
      password: hashedPass,
    });
    Admin.save()
      .then((admin) => {
        res.json({
          message: 'Created Account Successfully!',
        });
      })
      .catch((err) => {
        res.json({
          message: 'Created Account Fail!',
        });
      });
  }
}
module.exports = new AdminController();