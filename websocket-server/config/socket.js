const { Server } = require('socket.io');

/**
 * initializes a socket server instance
 * @param {http.Server} server - http server instance to attach the socket server to.
 * @returns {Server} - initialized socket server instance.
 */
const initializeSocket = (server) => {
  return new Server(server, {
    cors: {
      origin: '*',
    },
  });
};

module.exports = initializeSocket;
