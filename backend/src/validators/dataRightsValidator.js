import { check, validationResult } from 'express-validator';
import { AppError } from '../utils/index.js';

export const validateDataRightsRequest = [
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
  check('requestType')
    .notEmpty()
    .withMessage('Request type is required')
    .isIn(['Access', 'Correction', 'Erasure', 'Withdrawal of Consent', 'Grievance'])
    .withMessage('Invalid request type'),
  check('details')
    .notEmpty()
    .withMessage('Request details are required')
    .isLength({ min: 10, max: 3000 })
    .withMessage('Details must be between 10 and 3000 characters'),
  check('referenceId')
    .optional()
    .isLength({ max: 200 })
    .withMessage('Reference ID cannot exceed 200 characters'),
  check('consentGiven')
    .custom((val) => val === true || val === 'true')
    .withMessage('Consent and authorization confirmation is required'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const messages = errors.array().map(err => err.msg);
      return next(new AppError(messages.join(', '), 400));
    }
    next();
  }
];
