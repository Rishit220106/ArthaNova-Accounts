import express from 'express';
import { getHome } from '../controllers/homeController.js';
import { getHealth } from '../controllers/healthController.js';
import apiRoutes from './api.js';

const router = express.Router();

router.get('/', getHome);
router.get('/health', getHealth);

// API routes
router.use('/api', apiRoutes);

export default router;
