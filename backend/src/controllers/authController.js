import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';
import { asyncHandler, AppError } from '../utils/index.js';
import generateToken, { generateChallengeToken } from '../utils/generateToken.js';

const getRotationDays = () => {
  const parsed = parseInt(process.env.SECURITY_PIN_ROTATION_DAYS || '90', 10);
  return isNaN(parsed) || parsed <= 0 ? 90 : parsed;
};

const checkPinExpired = (securityPinChangedAt) => {
  if (!securityPinChangedAt) return false;
  const rotationDays = getRotationDays();
  const diffMs = Date.now() - new Date(securityPinChangedAt).getTime();
  return diffMs > rotationDays * 24 * 60 * 60 * 1000;
};

// @desc    Register admin
// @route   POST /api/auth/register
// @access  Public (Development Only)
export const register = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  // Check if admin exists
  const adminExists = await Admin.findOne({ email });

  if (adminExists) {
    return next(new AppError('Email already registered', 400));
  }

  // Create admin
  const admin = await Admin.create({
    name,
    email,
    password,
  });

  if (admin) {
    res.status(201).json({
      success: true,
      message: 'Admin registered successfully',
      token: generateToken(admin._id, admin.role),
      data: {
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } else {
    return next(new AppError('Invalid admin data', 400));
  }
});

// @desc    Login admin (Step 1: Email + Password)
// @route   POST /api/auth/login
// @access  Public
export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Check for admin
  const admin = await Admin.findOne({ email });

  if (!admin) {
    return next(new AppError('Invalid credentials', 401));
  }

  // Check if password matches
  const isMatch = await admin.matchPassword(password);

  if (!isMatch) {
    return next(new AppError('Invalid credentials', 401));
  }

  // Check initial PIN setup requirement for existing admin without securityPinHash
  if (!admin.securityPinHash) {
    const challengeToken = generateChallengeToken(admin._id, 'PIN_SETUP_CHALLENGE');
    return res.status(200).json({
      success: true,
      requiresSecurityPinSetup: true,
      message: 'Security PIN setup required for initial admin authentication',
      challengeToken,
    });
  }

  // Check if Security PIN is disabled
  if (admin.securityPinEnabled === false) {
    return res.status(200).json({
      success: true,
      message: 'Logged in successfully',
      token: generateToken(admin._id, admin.role),
      data: {
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  }

  // Check lock status
  if (admin.securityPinLockedUntil && admin.securityPinLockedUntil > Date.now()) {
    return next(new AppError('Too many failed attempts. Please try again later.', 429));
  } else if (admin.securityPinLockedUntil && admin.securityPinLockedUntil <= Date.now()) {
    admin.securityPinFailedAttempts = 0;
    admin.securityPinLockedUntil = null;
    await admin.save();
  }

  const isPinExpired = checkPinExpired(admin.securityPinChangedAt);
  const challengeToken = generateChallengeToken(admin._id, 'PIN_CHALLENGE');

  res.status(200).json({
    success: true,
    requiresSecurityPin: true,
    message: 'Password verified. Security PIN verification required.',
    challengeToken,
    isPinExpired,
  });
});

// @desc    Verify Security PIN (Step 2)
// @route   POST /api/auth/verify-security-pin
// @access  Public (Challenge Token Required)
export const verifySecurityPin = asyncHandler(async (req, res, next) => {
  const { challengeToken, pin } = req.body;

  let decoded;
  try {
    decoded = jwt.verify(challengeToken, process.env.JWT_SECRET);
  } catch (err) {
    return next(new AppError('Challenge token expired or invalid. Please log in again.', 403));
  }

  if (decoded.purpose !== 'PIN_CHALLENGE') {
    return next(new AppError('Invalid challenge token purpose', 403));
  }

  const admin = await Admin.findById(decoded.id);
  if (!admin) {
    return next(new AppError('Admin account not found', 404));
  }

  // Check Lockout
  if (admin.securityPinLockedUntil && admin.securityPinLockedUntil > Date.now()) {
    return next(new AppError('Too many failed attempts. Please try again later.', 429));
  } else if (admin.securityPinLockedUntil && admin.securityPinLockedUntil <= Date.now()) {
    admin.securityPinFailedAttempts = 0;
    admin.securityPinLockedUntil = null;
  }

  const isPinMatch = await admin.matchSecurityPin(pin);

  if (!isPinMatch) {
    admin.securityPinFailedAttempts = (admin.securityPinFailedAttempts || 0) + 1;

    if (admin.securityPinFailedAttempts >= 5) {
      admin.securityPinLockedUntil = new Date(Date.now() + 15 * 60 * 1000);
      await admin.save();
      return next(new AppError('Too many failed attempts. Please try again later.', 429));
    }

    await admin.save();
    return next(new AppError('Security PIN verification failed.', 401));
  }

  // Success: Clear failed attempts and lock
  admin.securityPinFailedAttempts = 0;
  admin.securityPinLockedUntil = null;
  await admin.save();

  const isPinExpired = checkPinExpired(admin.securityPinChangedAt);
  const token = generateToken(admin._id, admin.role);

  res.status(200).json({
    success: true,
    message: 'Security PIN verified successfully',
    token,
    isPinExpired,
    data: {
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
    },
  });
});

// @desc    Initial Security PIN Setup for existing admins
// @route   POST /api/auth/setup-security-pin
// @access  Public (Challenge Token Required)
export const setupSecurityPin = asyncHandler(async (req, res, next) => {
  const { challengeToken, pin, confirmPin } = req.body;

  if (pin !== confirmPin) {
    return next(new AppError('PIN confirmation does not match', 400));
  }

  let decoded;
  try {
    decoded = jwt.verify(challengeToken, process.env.JWT_SECRET);
  } catch (err) {
    return next(new AppError('Challenge token expired or invalid. Please log in again.', 403));
  }

  if (decoded.purpose !== 'PIN_SETUP_CHALLENGE') {
    return next(new AppError('Invalid challenge token purpose', 403));
  }

  const admin = await Admin.findById(decoded.id);
  if (!admin) {
    return next(new AppError('Admin account not found', 404));
  }

  await admin.setSecurityPin(pin);
  await admin.save();

  const token = generateToken(admin._id, admin.role);

  res.status(200).json({
    success: true,
    message: 'Security PIN set up successfully',
    token,
    data: {
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
    },
  });
});

// @desc    Update Security PIN (Settings)
// @route   PUT /api/auth/update-security-pin
// @access  Private
export const updateSecurityPin = asyncHandler(async (req, res, next) => {
  const { currentPin, newPin, confirmNewPin } = req.body;

  if (newPin !== confirmNewPin) {
    return next(new AppError('New Security PIN and confirmation must match', 400));
  }

  if (newPin === currentPin) {
    return next(new AppError('New Security PIN must not equal current Security PIN', 400));
  }

  const admin = await Admin.findById(req.admin.id);
  if (!admin) {
    return next(new AppError('Admin account not found', 404));
  }

  // Verify current PIN
  const isCurrentMatch = await admin.matchSecurityPin(currentPin);
  if (!isCurrentMatch) {
    return next(new AppError('Current Security PIN is incorrect', 400));
  }

  await admin.setSecurityPin(newPin);
  await admin.save();

  res.status(200).json({
    success: true,
    message: 'Security PIN updated successfully',
  });
});

// @desc    Get current logged in admin
// @route   GET /api/auth/me
// @access  Private
export const getMe = asyncHandler(async (req, res, next) => {
  const admin = await Admin.findById(req.admin.id).select('-password -securityPinHash');

  if (!admin) {
    return next(new AppError('Admin not found', 404));
  }

  const isPinExpired = checkPinExpired(admin.securityPinChangedAt);

  res.status(200).json({
    success: true,
    message: 'Admin data fetched successfully',
    data: {
      ...admin.toObject(),
      securityPinEnabled: admin.securityPinEnabled ?? true,
      securityPinChangedAt: admin.securityPinChangedAt,
      securityPinRotationDays: getRotationDays(),
      isPinExpired,
    },
  });
});

// @desc    Update admin password
// @route   PUT /api/auth/update-password
// @access  Private
export const updatePassword = asyncHandler(async (req, res, next) => {
  const { currentPassword, newPassword, confirmPassword } = req.body;

  if (newPassword !== confirmPassword) {
    return next(new AppError('New passwords do not match', 400));
  }

  const admin = await Admin.findById(req.admin.id);
  if (!admin) {
    return next(new AppError('Admin account not found', 404));
  }

  const isMatch = await admin.matchPassword(currentPassword);
  if (!isMatch) {
    return next(new AppError('Current password is incorrect', 400));
  }

  admin.password = newPassword;
  await admin.save();

  res.status(200).json({
    success: true,
    message: 'Password updated successfully',
  });
});

