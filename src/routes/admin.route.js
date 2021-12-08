const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');

//adminController
router.get('/logout', adminController.logout);
router.get('/:slug', adminController.show);
router.post('/login', adminController.auth);


router.get('/', requiresLogin ,adminController.index);
function requiresLogin(req, res, next) {
    if (req.session && req.session.admin) {
        return next();
    } else {
        return res.json({err: 'You must be logged in to view this page.'});
    }
}
module.exports = router;
