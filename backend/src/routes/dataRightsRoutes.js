import express from 'express';
import { createDataRightsRequest } from '../controllers/dataRightsController.js';
import { validateDataRightsRequest } from '../validators/dataRightsValidator.js';

const router = express.Router();

router.post('/', validateDataRightsRequest, createDataRightsRequest);

export default router;
