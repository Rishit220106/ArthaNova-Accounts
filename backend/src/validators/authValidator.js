import { check, validationResult } from 'express-validator';
import { AppError } from '../utils/index.js';

export const validateRegister = [
  check('name')
    .notEmpty()
    .withMessage('Name is required'),
  check('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email'),
  check('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const messages = errors.array().map(err => err.msg);
      return next(new AppError(messages.join(', '), 400));
    }
    next();
  }
];

export const validateLogin = [
  check('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email'),
  check('password')
    .notEmpty()
    .withMessage('Password is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const messages = errors.array().map(err => err.msg);
      return next(new AppError(messages.join(', '), 400));
    }
    next();
  }
];
