const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const auth = require('../middlewares/auth.middlewares');
const PassportController = require('../controllers/PassPortController');
const UserController = require('../controllers/UserController');


router.post('/login', PassportController.login);
router.post('/create', PassportController.create);
router.get('/home', auth.isAuth, UserController.home);
module.exports = router