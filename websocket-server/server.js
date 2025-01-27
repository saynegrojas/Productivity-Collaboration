const express = require('express');
const http = require('http');
const taskController = require('./controller/task-controller');
const initializeSocket = require('./config/socket');
require('dotenv').config({ path: '../.env' });

const app = express();
const server = http.createServer(app);
const io = initializeSocket(server);
const PORT = process.env.PORT || 4001;

// Establishes a socket connection
io.on('connection', (socket) => {
  console.log('A user connected');

  taskController(io, socket);

  // Handle disconnecting socket client
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Socket server is running on port ${PORT}`);
});
