let tasks = [];

// Send the current tasks to the connected client
const getAllTasks = () => tasks;

// Add a new task to the current tasks and send the updated tasks to all connected clients
const addTask = (task) => {
  tasks.push(task);
  return tasks;
};

// Update the task with the taskId and send the updated tasks to all connected clients
const completeTask = (taskId) => {
  tasks = tasks.map((task) => (task.id === taskId ? { ...task, completed: true } : task));
  return tasks;
};

// Remove the task with the taskId and send the updated tasks to all connected clients
const deleteTask = (taskId) => {
  tasks = tasks.filter((task) => task.id !== taskId);
  return tasks;
};

module.exports = {
  getAllTasks,
  addTask,
  completeTask,
  deleteTask,
};
