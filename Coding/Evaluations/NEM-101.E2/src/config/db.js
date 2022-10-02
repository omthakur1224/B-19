const mongoose = require('mongoose');
require('dotenv').config();
module.exports = () => {
  //mongoose local host connection
  mongoose.connect("mongodb://localhost:27017/b19");
};
