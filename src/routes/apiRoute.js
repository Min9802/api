let express = require('express');
let router = express.Router();
let Passport = require('../controllers/PassPortController');

router.post('/login', Passport.login);
router.post('/create', Passport.create);

module.exports = router