const express = require('express');
const PageController = require('../controllers/PageController.js');

const router = express.Router();

const pageController = new PageController();

router.post('/create-page', pageController.createPage);
router.get('/get-page', pageController.getPage);
router.post('/get-single-page/', pageController.getPageByName);
router.post('/update-page', pageController.updatePage);

module.exports = router;
