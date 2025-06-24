const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Kayıt Ol
exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({ email, password });
    sendTokenResponse(user, 201, res);
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Giriş Yap
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');
    
    if (!user) throw new Error('Geçersiz kimlik bilgileri');
    if (user.isGoogleAccount) throw new Error('Google hesabıyla giriş yapın');
    
    const isMatch = await user.matchPassword(password);
    if (!isMatch) throw new Error('Geçersiz kimlik bilgileri');
    
    sendTokenResponse(user, 200, res);
  } catch (err) {
    res.status(401).json({ success: false, error: err.message });
  }
};

// JWT Token Oluştur ve Gönder
const sendTokenResponse = (user, statusCode, res) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });
  
  res.status(statusCode).json({ 
    success: true, 
    token,
    user: { id: user._id, email: user.email }
  });
};