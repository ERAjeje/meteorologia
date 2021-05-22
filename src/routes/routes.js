import express from 'express';
import { apiController } from '../controllers/api.controller.js';

const route = express.Router();

route.get('/', apiController.v1);

export default route;