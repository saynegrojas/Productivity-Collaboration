import React from 'react';
import { Button, TextField } from '@mui/material';
import { PlusIcon } from 'lucide-react';

interface TaskInputProps {
  newTask: string;
  setNewTask: (value: React.SetStateAction<string>) => void;
  handleAddTask: () => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ newTask, setNewTask, handleAddTask }) => (
  <div className='flex items-center gap-2 mb-6 text-red'>
    <TextField
      label='New Task'
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      className='w-80 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400'
    />
    <Button
      variant='contained'
      className='text-sm px-4 py-4 rounded-lg bg-slate-600 hover:bg-slate-400 transition'
      onClick={handleAddTask}
      disabled={!newTask.trim()}
    >
      <span className='flex'>
        Add Task
        <PlusIcon size={16} className='ml-1' />
      </span>
    </Button>
  </div>
);

export default TaskInput;
