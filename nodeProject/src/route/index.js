const express = require('express');
const widgetRoute = require('./widgetRoute');
const templateRoute = require('./templateRoute');
const pageRoute = require('./pageRoute');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/widget',
        route: widgetRoute,
    },
    {
        path: '/page',
        route: pageRoute,
    },
    {
        path: '/template',
        route: templateRoute,
    }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;
