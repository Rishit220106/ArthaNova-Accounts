import Contact from '../models/Contact.js';
import { asyncHandler, AppError } from '../utils/index.js';
import { sendContactNotification } from '../services/emailService.js';

// @desc    Create a new contact
// @route   POST /api/contact
// @access  Public
export const createContact = asyncHandler(async (req, res, next) => {
  const { name, email, company, country, services, service, message } = req.body;

  let serviceList = [];
  if (Array.isArray(services) && services.length > 0) {
    serviceList = services;
  } else if (typeof service === 'string' && service.trim()) {
    serviceList = [service.trim()];
  } else if (Array.isArray(service)) {
    serviceList = service;
  }

  const primaryServiceStr = serviceList.join(' · ');

  const newContact = await Contact.create({
    name,
    email,
    company,
    country,
    services: serviceList,
    service: primaryServiceStr,
    message
  });

  // Send email notification (non-blocking)
  try {
    await sendContactNotification(newContact);
  } catch (error) {
    console.error('Email notification failed:', error);
  }

  res.status(201).json({
    success: true,
    message: 'Contact submitted successfully',
    data: newContact
  });
});

// @desc    Get all contacts
// @route   GET /api/contact
// @access  Public (should be protected in future)
export const getAllContacts = asyncHandler(async (req, res, next) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: contacts.length,
    data: contacts
  });
});

// @desc    Get single contact by ID
// @route   GET /api/contact/:id
// @access  Public (should be protected in future)
export const getContactById = asyncHandler(async (req, res, next) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    return next(new AppError('Contact not found', 404));
  }

  res.status(200).json({
    success: true,
    data: contact
  });
});
