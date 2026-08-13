const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  phoneNumber: { 
    type: String, 
    required: true,
    unique: true,
    trim: true
  },
  otp: {
    type: String,
    default: null
  },
  otpExpires: {
    type: Date,
    default: null
  },
  zakaNumber: {
    type: String,
    trim: true
  },
  isLoggedIn: {
    type: Boolean,
    default: false
  },
  lastLogin: {
    type: Date,
    default: null
  },
  loginAttempts: {
    type: Number,
    default: 0
  },
  lockedUntil: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
});

// Indexes for better query performance
UserSchema.index({ phoneNumber: 1 });
UserSchema.index({ otpExpires: 1 });

// Method to generate OTP
UserSchema.methods.generateOTP = function() {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  this.otp = otp;
  this.otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
  this.loginAttempts = 0;
  return otp;
};

// Method to verify OTP
UserSchema.methods.verifyOTP = function(otp) {
  if (this.lockedUntil && this.lockedUntil > new Date()) {
    return { success: false, message: 'Account locked. Try again later.' };
  }

  if (!this.otp || this.otpExpires < new Date()) {
    return { success: false, message: 'OTP expired. Please request a new one.' };
  }

  if (this.otp !== otp) {
    this.loginAttempts += 1;
    if (this.loginAttempts >= 5) {
      this.lockedUntil = new Date(Date.now() + 30 * 60 * 1000); // Lock for 30 minutes
      this.save();
      return { success: false, message: 'Too many failed attempts. Account locked for 30 minutes.' };
    }
    this.save();
    return { success: false, message: `Invalid OTP. ${5 - this.loginAttempts} attempts remaining.` };
  }

  this.isLoggedIn = true;
  this.lastLogin = new Date();
  this.otp = null;
  this.otpExpires = null;
  this.loginAttempts = 0;
  this.lockedUntil = null;
  this.save();
  return { success: true, message: 'OTP verified successfully.' };
};

// Check if model exists before compiling it
let User;
try {
  User = mongoose.model('User');
} catch {
  User = model('User', UserSchema, 'users');
}

module.exports = User;
