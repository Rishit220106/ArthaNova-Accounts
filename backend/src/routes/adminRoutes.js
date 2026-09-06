import express from 'express';
import { getDashboardStats, getAllContacts, getContactById, updateContactStatus, deleteContact } from '../controllers/adminController.js';
import { getAllDataRightsRequests, getDataRightsRequestById, updateDataRightsRequestStatus } from '../controllers/dataRightsController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);

router.get('/dashboard', getDashboardStats);
router.get('/contacts', getAllContacts);
router.get('/contact/:id', getContactById);
router.patch('/contact/:id', updateContactStatus);
router.delete('/contact/:id', deleteContact);

// Admin Data Rights management
router.get('/data-rights', getAllDataRightsRequests);
router.get('/data-rights/:id', getDataRightsRequestById);
router.patch('/data-rights/:id', updateDataRightsRequestStatus);

export default router;
