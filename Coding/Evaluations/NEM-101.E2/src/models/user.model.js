const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number, min: 20, max: 100 },
    gender: { type: String, enum: ['male', 'female'] },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model('user', userSchema);

module.exports = User;

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true,  unique: true},
//   gender: { type: String, required: true, enum: ['Male', 'Femail'] },
//   age: { type: Number, min: 20, max: 100 },
// });
