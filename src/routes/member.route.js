const express = require('express');
const router = express.Router();


const memberController = require('../app/controllers/MemberController');

// new HomeController.index
router.use('/login', memberController.login);

module.exports = router;
