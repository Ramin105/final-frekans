import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Geçersiz email formatı']
  },
  password: { 
    type: String, 
    required: true,
    minlength: [6, 'Şifre en az 6 karakter olmalı'] 
  },
  createdAt: { type: Date, default: Date.now },
  isGoogleAccount: { type: Boolean, default: false }
});

// Şifre hash'leme middleware
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  
  const bcrypt = require('bcryptjs');
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Şifre karşılaştırma metodu
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);
export default User;
