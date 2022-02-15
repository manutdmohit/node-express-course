const Task = require('../models/Task');

exports.getAllTasks = (req, res) => {
  res.send('get all tasks');
};

exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.json({ task });
};

exports.getTask = (req, res) => {
  res.json({ id: req.params.id });
};

exports.updateTask = (req, res) => {
  res.json({ id: req.params.id });
};

exports.deleteTask = (req, res) => {
  res.json({ id: req.params.id });
};
