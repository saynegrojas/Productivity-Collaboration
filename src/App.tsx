import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import TaskInput from './components/task/TaskInput';
import TaskTable from './components/task/TaskTable';
import RootLayout from './layout/Layout';
import ThemeToggle from './theme/ThemeToggle';
import { Task } from './interfaces/task';
import { useTaskSocket } from './hooks/useTaskSocket';
import { useTaskActions } from './hooks/useTaskActions';

const App: React.FC = () => {
  const [newTask, setNewTask] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const { tasks, socket } = useTaskSocket();
  const { addTask, completeTask, deleteTask } = useTaskActions(socket);

  const handleThemeChange = () => setIsDarkMode(!isDarkMode);

  const handleAddTask = () => {
    setLoading(true);
    if (newTask.trim()) {
      const task: Task = { id: Date.now().toString(), text: newTask, completed: false };
      addTask(task);
      setNewTask('');
      setLoading(false);
    }
  };

  return (
    <RootLayout isDarkMode={isDarkMode}>
      <Card className='p-5' sx={{ width: 1000 }}>
        <CardHeader
          title='Productivity and Collaboration'
          subheader='Real-Time Task Collaboration'
          action={<ThemeToggle isDarkMode={isDarkMode} handleThemeChange={handleThemeChange} />}
          style={{ backgroundColor: '#475569', color: '#e2e8f0' }}
        />
        <CardContent>
          <TaskInput newTask={newTask} setNewTask={setNewTask} handleAddTask={handleAddTask} />
          <TaskTable
            loading={loading}
            tasks={tasks}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        </CardContent>
      </Card>
    </RootLayout>
  );
};
export default App;
