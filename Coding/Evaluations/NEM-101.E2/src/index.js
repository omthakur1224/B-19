const express = require('express');
const cors = require('cors');
const connect = require('./config/db');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

//user route
const userRoute = require('./controller/user.controller');
app.use('/user', userRoute);

//task route
const taskoctRoute = require('./controller/task.controller');
app.use('/task', taskoctRoute);

//connection port
const port = process.env.PORT || 8000;

//starting server
app.listen(port, async () => {
  try {
    //connect to database
    await connect();
    console.log(`server connected successfully on port ${port}`);
  } catch (e) {
    console.log(e.message);
  }
});
