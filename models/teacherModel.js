import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;
const teacherSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Teacher = mongoose.model('teachers', teacherSchema);

export default Teacher;
