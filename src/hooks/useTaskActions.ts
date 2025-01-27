import { Socket } from 'socket.io-client';
import { Task } from '../interfaces/task';

export const useTaskActions = (socket: Socket) => {
  const addTask = (task: Task) => socket.emit('addTask', task);
  const completeTask = (id: string) => socket.emit('completeTask', id);
  const deleteTask = (id: string) => socket.emit('deleteTask', id);

  return { addTask, completeTask, deleteTask };
};
