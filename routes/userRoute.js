import express from 'express';
import {
  authUser,
  registerUser,
  // getUsers,
  // getUserById,
  getUserProfile,
} from '../controllers/userController.js';

import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

// router.route('/').get(getUsers).post(registerUser);
router.route('/').post(registerUser);

router.post('/login', authUser);

router.route('/profile').get(protect, getUserProfile);

export default router;
