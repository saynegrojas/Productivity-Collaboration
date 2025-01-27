const taskService = require('../services/task-service.js');

// Task controller to handle task-related events from the client side and emit the updated tasks to all connected clients
const taskController = (io, socket) => {
  const emitTasks = () => {
    io.emit('tasks', taskService.getAllTasks());
  };

  socket.emit('tasks', taskService.getAllTasks());

  socket.on('addTask', (task) => {
    taskService.addTask(task);
    emitTasks();
  });

  socket.on('completeTask', (taskId) => {
    taskService.completeTask(taskId);
    emitTasks();
  });

  socket.on('deleteTask', (taskId) => {
    taskService.deleteTask(taskId);
    emitTasks();
  });
};

module.exports = taskController;
