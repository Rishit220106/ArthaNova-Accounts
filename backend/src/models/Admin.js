import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
      minlength: 8,
    },
    role: {
      type: String,
      default: 'admin',
    },
    securityPinHash: {
      type: String,
      default: null,
    },
    securityPinChangedAt: {
      type: Date,
      default: null,
    },
    securityPinEnabled: {
      type: Boolean,
      default: true,
    },
    securityPinFailedAttempts: {
      type: Number,
      default: 0,
    },
    securityPinLockedUntil: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Encrypt password using bcrypt
adminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Match user entered password to hashed password in database
adminSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Match user entered 6-digit security PIN to hashed PIN in database
adminSchema.methods.matchSecurityPin = async function (enteredPin) {
  if (!this.securityPinHash) return false;
  return await bcrypt.compare(enteredPin, this.securityPinHash);
};

// Set and hash new security PIN
adminSchema.methods.setSecurityPin = async function (newPin) {
  const salt = await bcrypt.genSalt(10);
  this.securityPinHash = await bcrypt.hash(newPin, salt);
  this.securityPinChangedAt = new Date();
  this.securityPinFailedAttempts = 0;
  this.securityPinLockedUntil = null;
};

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
