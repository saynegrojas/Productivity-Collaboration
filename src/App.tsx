import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import { useSocket } from './context/SocketContext';
import TaskInput from './components/TaskInput';
import TaskTable from './components/TaskTable';
import RootLayout from './layout/Layout';
import ThemeToggle from './theme/theme-toggle';
import TaskList from './components/TaskList';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const socket = useSocket();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Listen for updates from the server
    socket.on('tasks', (updatedTasks: Task[]) => {
      setTasks(updatedTasks);
    });

    return () => {
      socket.off('tasks');
    };
  }, []);

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = { id: Date.now().toString(), text: newTask, completed: false };
      socket.emit('addTask', task);
      setNewTask('');
    }
  };

  const completeTask = (id: string) => {
    socket.emit('completeTask', id);
  };

  const deleteTask = (id: string) => {
    socket.emit('deleteTask', id);
  };

  return (
    <RootLayout isDarkMode={isDarkMode}>
      <Card className='p-5' sx={{ width: 1000 }}>
        <CardHeader
          title='Productivity and Collaboration'
          subheader='Real-Time Task Collaboration'
          action={<ThemeToggle isDarkMode={isDarkMode} handleThemeChange={handleThemeChange} />}
          className='bg-slate-600 text-slate-200'
        />
        <CardContent>
          <TaskInput newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
          <TaskTable tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
        </CardContent>
      </Card>
    </RootLayout>
  );
};
export default App;
