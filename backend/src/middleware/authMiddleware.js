import jwt from 'jsonwebtoken';
import { asyncHandler, AppError } from '../utils/index.js';
import Admin from '../models/Admin.js';

export const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Explicitly reject challenge tokens on protected endpoints
      if (decoded.purpose) {
        return next(new AppError('Not authorized, incomplete authentication challenge', 401));
      }

      // Get admin from the token
      req.admin = await Admin.findById(decoded.id).select('-password -securityPinHash');
      
      if (!req.admin) {
        return next(new AppError('Not authorized, admin deleted', 401));
      }

      next();
    } catch (error) {
      return next(new AppError('Not authorized, token failed', 401));
    }
  }

  if (!token) {
    return next(new AppError('Not authorized, no token', 401));
  }
});
