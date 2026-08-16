import express from 'express';
import { createContact, getAllContacts, getContactById } from '../controllers/contactController.js';
import { validateContact } from '../validators/contactValidator.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .post(validateContact, createContact)
  .get(protect, getAllContacts);

router.route('/:id')
  .get(protect, getContactById);

export default router;
