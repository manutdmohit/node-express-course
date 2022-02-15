const Task = require('../models/Task');

exports.getAllTasks = (req, res) => {
  res.send('get all tasks');
};

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.json({ task });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
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
