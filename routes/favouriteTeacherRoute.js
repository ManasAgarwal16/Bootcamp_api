import express from 'express';
import { getfavourite } from '../controllers/favouriteTeacherController.js';
const router = express.Router();

// import { protect } from '../middleware/authMiddleware.js';
router.route('/getfavourite').get(getfavourite);

export default router;
