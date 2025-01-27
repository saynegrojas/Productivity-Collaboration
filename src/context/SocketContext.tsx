import React, { createContext, useContext } from 'react';
import io from 'socket.io-client';
import { generateEndpoints } from '../utils/endpoints';

const { endpoint } = generateEndpoints();
const SocketContext = createContext(io(endpoint));

export const useSocket = () => useContext(SocketContext);

export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const socket = io(endpoint);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};
