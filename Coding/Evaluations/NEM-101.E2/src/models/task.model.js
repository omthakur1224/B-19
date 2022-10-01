const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Task = mongoose.model('task', taskSchema);

module.exports = Task;

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true,  unique: true},
//   gender: { type: String, required: true, enum: ['Male', 'Femail'] },
//   age: { type: Number, min: 20, max: 100 },
// });
