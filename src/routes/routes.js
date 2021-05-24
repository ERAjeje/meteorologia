const express = require('express');
const apiController = require('../controllers/api.controller.js');
const PlaceController = require('../controllers/PlaceController');

const route = express.Router();

route.get('/', apiController.v1);
route.get('/search', PlaceController.getAll);
route.post('/search', PlaceController.store);

module.exports = route;