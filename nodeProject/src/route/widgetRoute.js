const express = require('express');
const WidgetController = require('../controllers/WidgetController.js');

const router = express.Router();

const widgetController = new WidgetController();

router.post('/create-widget', widgetController.createWidget);
//router.get('/get-widget', widgetController.getWidget);
router.get('/get-widget', widgetController.getWidgetData);
//router.post('/get-single-widget/:id', widgetController.getWidgetById);
router.post('/get-single-widget/:id', widgetController.getWidgetById);
router.post('/update-widget', widgetController.updateWidget);

module.exports = router;
