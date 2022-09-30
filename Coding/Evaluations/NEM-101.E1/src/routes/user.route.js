const express = require('express');
const fs = require('fs');
const path = require('path');
const userRoute = express.Router();

const userDb = fs.readFileSync(`${__dirname}/../../data/users.json`, {
  encoding: 'utf-8',
});
let users = JSON.parse(userDb);

const updateDB = (updatedArr) => {
  fs.writeFileSync(
    `${__dirname}/../../data/users.json`,
    JSON.stringify(updatedArr),
    {
      encoding: 'utf-8',
    }
  );
};
// console.log('userDb: ', users);

userRoute.get('/', (req, res) => {
  res.send(users);
});
userRoute.get('/:id', (req, res) => {
  const findOne = users.find((u) => u.id == parseInt(req.params.id));
  res.send(findOne);
});
userRoute.post('/', (req, res) => {
  users.push(req.body);
  updateDB(users);
  res.send(users);
});

userRoute.delete('/:id', (req, res) => {
  const remainingUsers = users.filter((u) => u.id != parseInt(req.params.id));
  updateDB(remainingUsers);
  res.send(remainingUsers);
});

module.exports = userRoute;

//http://localhost:8000/user/
