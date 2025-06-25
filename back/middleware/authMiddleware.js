import jwt          from'jsonwebtoken';
import asyncHandler from'express-async-handler';
import User         from'../models/User.js';

const protect = asyncHandler(async (req, res, next) => {
  let token;
  
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Token'ı al "Bearer token" formatından
      token = req.headers.authorization.split(' ')[1];
      
      // Token'ı doğrula
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Kullanıcıyı token'dan al (ID kullanarak)
      req.user = await User.findById(decoded.id).select('-password');
      
      next();
    } catch (error) {
      console.error('Token doğrulama hatası:', error);
      res.status(401);
      throw new Error('Yetkilendirme başarısız, token geçersiz');
    }
  }
  
  if (!token) {
    res.status(401);
    throw new Error('Yetkilendirme başarısız, token yok');
  }
});

export { protect };
