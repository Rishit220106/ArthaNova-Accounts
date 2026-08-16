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

export const validateUpdatePassword = [
  check('currentPassword')
    .notEmpty()
    .withMessage('Current password is required'),
  check('newPassword')
    .notEmpty()
    .withMessage('New password is required')
    .isLength({ min: 6 })
    .withMessage('New password must be at least 6 characters long'),
  check('confirmPassword')
    .notEmpty()
    .withMessage('Confirm password is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const messages = errors.array().map(err => err.msg);
      return next(new AppError(messages.join(', '), 400));
    }
    next();
  }
];

export const validateVerifyPin = [
  check('challengeToken')
    .notEmpty()
    .withMessage('Challenge token is required'),
  check('pin')
    .notEmpty()
    .withMessage('Security PIN is required')
    .matches(/^\d{6}$/)
    .withMessage('Security PIN must be exactly 6 numeric digits'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const messages = errors.array().map(err => err.msg);
      return next(new AppError(messages.join(', '), 400));
    }
    next();
  }
];

export const validateSetupPin = [
  check('challengeToken')
    .notEmpty()
    .withMessage('Challenge token is required'),
  check('pin')
    .notEmpty()
    .withMessage('Security PIN is required')
    .matches(/^\d{6}$/)
    .withMessage('Security PIN must be exactly 6 numeric digits'),
  check('confirmPin')
    .notEmpty()
    .withMessage('Confirm PIN is required')
    .custom((value, { req }) => value === req.body.pin)
    .withMessage('PIN confirmation does not match'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const messages = errors.array().map(err => err.msg);
      return next(new AppError(messages.join(', '), 400));
    }
    next();
  }
];

export const validateUpdatePin = [
  check('currentPin')
    .notEmpty()
    .withMessage('Current Security PIN is required')
    .matches(/^\d{6}$/)
    .withMessage('Current Security PIN must be exactly 6 numeric digits'),
  check('newPin')
    .notEmpty()
    .withMessage('New Security PIN is required')
    .matches(/^\d{6}$/)
    .withMessage('New Security PIN must be exactly 6 numeric digits')
    .custom((value, { req }) => value !== req.body.currentPin)
    .withMessage('New Security PIN must not equal current Security PIN'),
  check('confirmNewPin')
    .notEmpty()
    .withMessage('Confirm New Security PIN is required')
    .custom((value, { req }) => value === req.body.newPin)
    .withMessage('New Security PIN and confirmation must match'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const messages = errors.array().map(err => err.msg);
      return next(new AppError(messages.join(', '), 400));
    }
    next();
  }
];

