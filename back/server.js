import dotenv from 'dotenv';


import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware'ler
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Veritabanı bağlantısı
connectDB();

// Rotalar
app.use('/api/auth', authRoutes);

// Hata yönetimi middleware
app.use(errorHandler);

app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor`));