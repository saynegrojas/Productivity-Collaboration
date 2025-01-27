import { useEffect, useState } from 'react';
import { useSocket } from '../context/SocketContext';
import { Task } from '../interfaces/task';

export const useTaskSocket = () => {
  const socket = useSocket();
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    socket.on('tasks', (updatedTasks: Task[]) => {
      setTasks(updatedTasks);
    });

    return () => {
      socket.off('tasks');
    };
  }, []);

  return { tasks, socket };
};
