import express from 'express';
import * as earthquakeController from '../controllers/earthquake.controller.js';

const router = express.Router();

router.get("/earthquakes", earthquakeController.getLastEarthquakes);



export default router;
