import express from 'express';
import { register, login, getMe, updatePassword } from '../controllers/authController.js';
import { validateRegister, validateLogin, validateUpdatePassword } from '../validators/authValidator.js';
import { protect } from '../middleware/authMiddleware.js';

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
router.get('/me', protect, getMe);
router.put('/update-password', protect, validateUpdatePassword, updatePassword);

export default router;

