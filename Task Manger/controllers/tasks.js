const Task = require('../models/Task');

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});

    res.status(200).json({
      count: tasks.length,
      tasks,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

exports.getTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });

    // if (!task) {
    //   res
    //     .status(404)
    //     .json({ message: `No task with id : ${req.params.id} found` });
    // }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

exports.updateTask = (req, res) => {
  res.json({ id: req.params.id });
};

exports.deleteTask = (req, res) => {
  res.json({ id: req.params.id });
};
