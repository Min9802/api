const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

// new HomeController.index
router.get('/about', siteController.about);

router.get('/', siteController.index);

module.exports = router;
