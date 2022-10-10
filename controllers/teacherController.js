import asyncHandler from 'express-async-handler';
import Teacher from '../models/teacherModel.js';
import User from '../models/userModel.js';

// adding to the fav list.
const getfav = asyncHandler(async (req, res) => {
  const idd = req.params.id;
  const z = await User.findById(req.user._id);

  const index = z.fav.findIndex((id) => id == req.params.id);
  console.log(index);
  if (index == -1) {
    const favTeacher = await Teacher.findById(req.params.id);
    const count = favTeacher.likes + 1;
    const temp = await Teacher.findByIdAndUpdate(req.params.id, {
      likes: count,
    });
    const favour = await User.findByIdAndUpdate(
      req.user._id,
      { $push: { fav: req.params.id } },
      { new: true }
    );
    res.json(favour);
  } else {
    res.status(401);
    throw new Error('Already Favourite exist');
  }
});

// removing from the fav list.

const removefav = asyncHandler(async (req, res) => {
  const favTeacher = await Teacher.findById(req.params.id);
  var count = favTeacher.likes - 1;
  if (count < 0) {
    count = 0;
  }
  const temp = await Teacher.findByIdAndUpdate(req.params.id, {
    likes: count,
  });

  const favour = await User.findByIdAndUpdate(
    req.user._id,
    { $pull: { fav: req.params.id } },
    { new: true }
  );
  res.json(favour);
});

export { getfav, removefav };
