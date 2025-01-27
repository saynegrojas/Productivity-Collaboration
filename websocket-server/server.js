const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
require('dotenv').config({ path: '../.env' });

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});
const PORT = process.env.PORT || 4001;

let tasks = [];

io.on('connection', (socket) => {
  console.log('A user connected');

  // Send current tasks to the newly connected client
  socket.emit('tasks', tasks);

  // Handle adding a task
  socket.on('addTask', (task) => {
    tasks.push(task);
    io.emit('tasks', tasks); // Broadcast updated tasks to all clients
  });

  // Handle marking a task as completed
  socket.on('completeTask', (taskId) => {
    tasks = tasks.map((task) => (task.id === taskId ? { ...task, completed: true } : task));
    io.emit('tasks', tasks);
  });

  // Handle deleting a task
  socket.on('deleteTask', (taskId) => {
    console.log(taskId);
    tasks = tasks.filter((task) => task.id !== taskId);
    io.emit('tasks', tasks);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`WebSocket server is running on port ${PORT}`);
});
