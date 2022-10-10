import express from 'express';
import { getfav, removefav } from '../controllers/teacherController.js';

import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/fav/:id').get(protect, getfav);

router.route('/removefav/:id').get(protect, removefav);

export default router;
