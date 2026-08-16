import express from 'express';
import {
  register,
  login,
  verifySecurityPin,
  setupSecurityPin,
  updateSecurityPin,
  getMe,
  updatePassword
} from '../controllers/authController.js';
import {
  validateRegister,
  validateLogin,
  validateVerifyPin,
  validateSetupPin,
  validateUpdatePin,
  validateUpdatePassword
} from '../validators/authValidator.js';
import { protect } from '../middleware/authMiddleware.js';
import { pinRateLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

const allowRegisterInProd = (req, res, next) => {
  if (process.env.NODE_ENV === 'production' && process.env.ENABLE_ADMIN_REGISTRATION !== 'true') {
    return res.status(403).json({
      success: false,
      message: 'Admin registration is disabled in production.'
    });
  }
  next();
};

router.post('/register', allowRegisterInProd, validateRegister, register);
router.post('/login', validateLogin, login);
router.post('/verify-security-pin', pinRateLimiter, validateVerifyPin, verifySecurityPin);
router.post('/setup-security-pin', pinRateLimiter, validateSetupPin, setupSecurityPin);
router.put('/update-security-pin', protect, validateUpdatePin, updateSecurityPin);
router.get('/me', protect, getMe);
router.put('/update-password', protect, validateUpdatePassword, updatePassword);

export default router;

