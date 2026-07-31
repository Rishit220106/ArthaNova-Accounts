import express from 'express';
import { createContact, getAllContacts, getContactById } from '../controllers/contactController.js';
import { validateContact } from '../validators/contactValidator.js';

const router = express.Router();

router.route('/')
  .post(validateContact, createContact)
  .get(getAllContacts);

router.route('/:id')
  .get(getContactById);

export default router;
