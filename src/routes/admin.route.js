const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');

//adminController
router.get('/:slug', adminController.show);
router.post('/login', adminController.auth);
router.get('/', adminController.index);

module.exports = router;
