import express from 'express';
import { getApiRoot } from '../controllers/apiController.js';
import contactRoutes from './contactRoutes.js';
import adminRoutes from './adminRoutes.js';
import authRoutes from './authRoutes.js';

const router = express.Router();

router.get('/', getApiRoot);
router.use('/auth', authRoutes);
router.use('/contact', contactRoutes);
router.use('/admin', adminRoutes);

export default router;
