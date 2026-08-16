import Admin from '../models/Admin.js';
import { asyncHandler, AppError } from '../utils/index.js';
import generateToken from '../utils/generateToken.js';

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

// @desc    Login admin
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

  res.status(200).json({
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
});

// @desc    Get current logged in admin
// @route   GET /api/auth/me
// @access  Private
export const getMe = asyncHandler(async (req, res, next) => {
  const admin = await Admin.findById(req.admin.id).select('-password');

  res.status(200).json({
    success: true,
    message: 'Admin data fetched successfully',
    data: admin,
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

