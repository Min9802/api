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
        res.render('home', {
            layout: 'backend',
            partials: {
                head: '../part-admin/header',
                tail: '../part-admin/footer',
            },
        });
    }
    show(req, res, next) {
        switch (req.params.slug) {
            case 'home':
                router.get('home', mid.requiresLogin, function (req, res, next) {
                    res.render('index');
                });
                break;
            case 'login':
                res.render(path.join('admin', 'login'));
                break;
        }

        function requiresLogin(req, res, next) {
            if (req.session && req.session.adminId) {
                return next();
            } else {
                var err = new Error('You must be logged in to view this page.');
                err.status = 401;
                return res.redirect('/login');
            }
        }
    }
    auth(req, res, next) {
        var username = req.body.username;
        var password = req.body.password;
        Admin.findOne({username:username})
        .then(admin => {
            if(admin){
                bcrypt.compare(password, admin.password, function(err, result) {
                    if(err){
                        res.json({
                            error: err
                        })
                    }
                    if(result){
                        let token = jwt.sign({username: admin.username},'verySecretValue',{expiresIn: '1h'})
                        res.json({
                            message: 'Login Successfully !',
                            token,
                            admin
                        })
                    }else{
                        res.json({
                            message: 'Password does not match !'
                        })
                    }
                })
            }else{
                res.json({
                    message: "No Account Found!"
                })
            }
        })
        .catch(next)
    }
    store(req, res, next) {
        bcrypt.hash(req.body.password, 10, function (err,hashedPass){
            if(err){
                res.json({
                    error: err
                });
            }
        });
        let admin = new Admin ({
            username: req.body.username,
            name: req.body.name,
            email: req.body.email,
            password: hashedPass,
        });
        Admin.save()
        .then(admin=> {
            res.json({
                message: 'Created Account Successfully!'
            });
        })
        .catch(err => {
            res.json({
                message: 'Created Account Successfully!'
            });
        });
    }
}
module.exports = new AdminController();