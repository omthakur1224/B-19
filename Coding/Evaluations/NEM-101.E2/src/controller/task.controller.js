const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const Task = require('../models/task.model');
const taskRoute = express.Router();



taskRoute.get('/',  async (req, res) => {
  try {
    // const [id, mail, pass] = req.headers.token.trim().split(':');

    const page = req.query.page || 1;
    const size = req.query.size || 5;
    const id=req.params.id;
    const task = await Task.find({ author: id }).skip((page-1)*size).limit(size).lean().exec();
    return res.send(task);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

taskRoute.get('/:id',  async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean().exec();
    return res.status(200).send(task);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

taskRoute.post('/',  async (req, res) => {
  try {
    // const [id, mail, pass] = req.headers.token.trim().split(':');
    const newTask = {
      ...req.body,
      author: req.params.id,
    };
    const task = await Task.create(newTask);
    return res.status(201).send('task created successfully');
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

taskRoute.patch('/:id',  async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.send(task);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

taskRoute.delete('/:id',  async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id).lean().exec();
    return res.send(task);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = taskRoute;
