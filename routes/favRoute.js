import express from 'express';
import {
  //   authUser,
  //   registerUser,
  // getUsers,
  // getUserById,
  getfav,
  //   getUserProfile,
} from '../controllers/teacherController.js';

import { protect } from '../middleware/authMiddleware.js';
// import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

// router.route('/').get(getUsers).post(registerUser);
router.route('/fav/:id').get(protect, getfav);

// router.post('/login', authUser);

// router.route('/profile').get(protect, getUserProfile);

export default router;
