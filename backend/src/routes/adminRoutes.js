import express from 'express';
import { getDashboardStats, getAllContacts, getContactById, updateContactStatus, deleteContact } from '../controllers/adminController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);

router.get('/dashboard', getDashboardStats);
router.get('/contacts', getAllContacts);
router.get('/contact/:id', getContactById);
router.patch('/contact/:id', updateContactStatus);
router.delete('/contact/:id', deleteContact);

export default router;
