import { check, validationResult } from 'express-validator';
import { AppError } from '../utils/index.js';

export const validateContact = [
  check('name')
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  check('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email'),
  check('company')
    .optional()
    .isLength({ max: 100 })
    .withMessage('Company cannot exceed 100 characters'),
  check('country')
    .optional()
    .isLength({ max: 100 })
    .withMessage('Country cannot exceed 100 characters'),
  check('message')
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 10, max: 2000 })
    .withMessage('Message must be between 10 and 2000 characters'),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const messages = errors.array().map(err => err.msg);
      return next(new AppError(messages.join(', '), 400));
    }
    next();
  }
];
