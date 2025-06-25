import express from 'express';
const router  = express.Router();
import { 
  registerUser, 
  loginUser, 
  getMe 
} from'../controllers/authController.js';
import { protect } from'../middleware/authMiddleware.js';

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);

// Google OAuth için placeholder
router.get('/google', (req, res) => {
  res.status(200).json({ message: 'Google entegrasyonu hazır' });
});

export default router;
