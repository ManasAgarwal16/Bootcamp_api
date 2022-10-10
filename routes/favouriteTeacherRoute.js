import express from 'express';
import { getfavourite } from '../controllers/favouriteTeacherController.js';
const router = express.Router();

router.route('/getfavourite').get(getfavourite);

export default router;
