// middleware/errorMiddleware.js
import colors from 'colors';
import util from 'util';

/**
 * Hata Yönetimi Middleware'i (ES Module)
 * 
 * Bu middleware, uygulama genelinde oluşan hataları merkezi olarak yönetir.
 * Geliştirme ortamında hata detaylarını gösterirken, üretim ortamında
 * kullanıcıya daha genel hata mesajları döndürür.
 * 
 * Kullanım:
 * import errorHandler from './middleware/errorMiddleware.js';
 * app.use(errorHandler);
 */

const errorHandler = (err, req, res, next) => {
  // Hata durumunda varsayılan değerleri ayarla
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Sunucu hatası oluştu';
  
  // Hata detaylarını logla
  logError(err, req);
  
  // Mongoose hataları için özel işlemler
  if (err.name === 'CastError') {
    // Geçersiz ID formatı hatası
    statusCode = 400;
    message = `Geçersiz ID formatı: ${err.value}`;
  }
  
  // Mongoose doğrulama hatası
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = 'Doğrulama hatası';
    
    // Doğrulama hata mesajlarını topla
    const errors = Object.values(err.errors).map(val => val.message);
    message = `Doğrulama hatası: ${errors.join(', ')}`;
  }
  
  // Mongoose benzersiz anahtar hatası
  if (err.code === 11000) {
    statusCode = 400;
    const field = Object.keys(err.keyValue)[0];
    message = `${field} alanı için bu değer zaten kullanılıyor: ${err.keyValue[field]}`;
  }
  
  // JWT yetkilendirme hatası
  if (err.name === 'JsonWebTokenError') {
    statusCode = 401;
    message = 'Geçersiz token, yetkilendirme başarısız';
  }
  
  // JWT token süresi dolmuş
  if (err.name === 'TokenExpiredError') {
    statusCode = 401;
    message = 'Token süresi doldu, lütfen tekrar giriş yapın';
  }
  
  // Yanıtı oluştur
  const errorResponse = {
    success: false,
    message: message,
    // Geliştirme ortamında hata detaylarını göster
    ...(process.env.NODE_ENV === 'development' && { 
      error: {
        name: err.name,
        message: err.message,
        stack: err.stack
      }
    })
  };
  
  res.status(statusCode).json(errorResponse);
};

// Hata detaylarını loglama fonksiyonu
const logError = (err, req) => {
  console.error(colors.red.bold('❌ Hata Oluştu:'));
  console.error(`⏱️  Tarih: ${new Date().toISOString()}`);
  console.error(`🔗 Endpoint: ${req.method} ${req.originalUrl}`);
  console.error(`📝 Hata Mesajı: ${colors.yellow(err.message)}`);
  
  // Hata stack'i geliştirme ortamında göster
  if (process.env.NODE_ENV === 'development') {
    console.error(`🧾 Hata Stack:\n${colors.grey(err.stack)}`);
  }
  
  // İsteğin detaylarını logla
  console.error(colors.cyan('📦 İstek Detayları:'));
  console.error(`   📍 IP: ${req.ip}`);
  console.error(`   👤 Kullanıcı: ${req.user ? req.user.id : 'Kimlik doğrulanmadı'}`);
  
  // İstek body'sini formatlı şekilde logla
  if (req.body && Object.keys(req.body).length > 0) {
    const bodyString = util.inspect(req.body, { depth: null, colors: true });
    console.error(`   📄 İstek Body:\n${colors.grey(bodyString)}`);
  }
  
  // Sorgu parametrelerini logla
  if (req.query && Object.keys(req.query).length > 0) {
    const queryString = util.inspect(req.query, { depth: null, colors: true });
    console.error(`   🔍 Sorgu Parametreleri:\n${colors.grey(queryString)}`);
  }
};

export default errorHandler;