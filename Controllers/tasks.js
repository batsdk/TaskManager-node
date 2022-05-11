const Task = require("../Models/task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(404).send({ error: error.message });
    console.log(error);
  }
};
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error: error });
    console.log(error);
  }
};
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    if (!task)
      return res.status(404).json({ msg: `No task with ID ${taskID}` });

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const updateTask = (req, res) => {
  res.send("Task Update");
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findByIdAndDelete({ _id: taskID });

    if (!task)
      return res.status(404).json({ msg: `No task with ID ${taskID}` });

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
};
