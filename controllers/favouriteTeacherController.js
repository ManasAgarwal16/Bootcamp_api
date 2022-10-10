import asyncHandler from 'express-async-handler';
import Teacher from '../models/teacherModel.js';

let maxi = 0;
let id;
const getfavourite = asyncHandler(async (req, res) => {
  const man = await Teacher.find();
  const newdata = man.map((c) => {
    if (maxi < c.likes) {
      maxi = c.likes;
      id = c.id;
    }
  });
  const ans = await Teacher.findById(id);
  console.log(maxi);
  res.send({ ans });
});

export { getfavourite };
