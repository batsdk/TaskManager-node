const getAllTasks = (req, res) => {
  res.send("Get all Tasks");
};
const createTask = (req, res) => {
  res.json(req.body);
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("Task Update");
};

const deleteTask = (req, res) => {
  res.send("Task Delete");
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
};
