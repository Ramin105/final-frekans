import User         from '../models/User.js';
import jwt          from 'jsonwebtoken';
import asyncHandler  from 'express-async-handler';

// @desc    Kullanıcı kaydı
// @route   POST /api/auth/register
const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Kullanıcı var mı kontrol et
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('Bu email ile zaten kayıtlı kullanıcı var');
  }

  // Kullanıcı oluştur
  const user = await User.create({ email, password });

  if (user) {
    generateTokenResponse(user, 201, res);
  } else {
    res.status(400);
    throw new Error('Geçersiz kullanıcı verisi');
  }
});

// @desc    Kullanıcı girişi
// @route   POST /api/auth/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Kullanıcıyı email ile bul
  const user = await User.findOne({ email }).select('+password');

  if (user && (await user.matchPassword(password))) {
    generateTokenResponse(user, 200, res);
  } else {
    res.status(401);
    throw new Error('Geçersiz email veya şifre');
  }
});

// @desc    Giriş yapmış kullanıcı bilgileri
// @route   GET /api/auth/me
const getMe = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({
    id: user._id,
    email: user.email,
    createdAt: user.createdAt
  });
});

// JWT token oluştur ve cookie'ye set et
const generateTokenResponse = (user, statusCode, res) => {
  // JWT token oluştur
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });

  // Token'ı HTTP-only cookie olarak set et
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 gün
  });

  res.status(statusCode).json({
    _id: user._id,
    email: user.email,
    token
  });
};

export { registerUser, loginUser, getMe };
