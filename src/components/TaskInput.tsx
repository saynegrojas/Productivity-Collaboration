import React from 'react';
import { Button, TextField } from '@mui/material';
import { PlusIcon } from 'lucide-react';

interface TaskInputProps {
  newTask: string;
  setNewTask: (value: React.SetStateAction<string>) => void;
  addTask: (text: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ newTask, setNewTask, addTask }) => {
  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div className='flex items-center gap-2 mb-6 text-red'>
      <TextField
        label='New Task'
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className='w-80 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400'
      />
      <Button
        variant='contained'
        className='text-sm px-4 py-4 rounded-lg bg-slate-400 hover:bg-slate-600 transition'
        onClick={handleAddTask}
        disabled={!newTask.trim()}
      >
        <span className='flex'>
          Add Task
          <PlusIcon size={16} className='text-white ml-1' />
        </span>
      </Button>
    </div>
  );
};

export default TaskInput;
