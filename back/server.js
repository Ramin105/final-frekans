require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Veritabanı Bağlantısı
connectDB();

// Rotas
app.use('/api/auth', authRoutes);

// Hata Yönetimi
app.use(errorHandler);

app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor`));