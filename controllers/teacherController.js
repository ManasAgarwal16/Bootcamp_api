import asyncHandler from 'express-async-handler';
import Teacher from '../models/teacherModel.js';
import User from '../models/userModel.js';
// import { protect } from '../middleware/authMiddleware.js';

// console.log(Teacher);

const getfav = asyncHandler(async (req, res) => {
  const favTeacher = await Teacher.findById(req.params.id);
  const count = favTeacher.likes + 1;
  const temp = await Teacher.findByIdAndUpdate(req.params.id, {
    likes: count,
  });
  //   console.log(favTeacher.likes);

  //   console.log(req.user._id);

  const favour = await User.findByIdAndUpdate(
    req.user._id,
    { $push: { fav: req.params._id } },
    { new: true }
  );
  res.json(favour);
});

export { getfav };
