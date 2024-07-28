const express = require('express');
const TemplateController = require('../controllers/TemplateController.js');

const router = express.Router();

const templateController = new TemplateController();

router.post('/create-template', templateController.createTemplate);
router.get('/get-template', templateController.getTemplate);
router.post('/get-single-template/:id', templateController.getTemplateById);
router.post('/update-template', templateController.updateTemplate);

module.exports = router;
