import React from 'react';
import { motion, Reorder } from 'framer-motion';
import { Task } from '../interfaces/task';
import ActionButton from './ActionButton';

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  completeTask: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, setTasks, completeTask, deleteTask }) => {
  return (
    <Reorder.Group as='div' axis='y' values={tasks} onReorder={setTasks} className='space-y-2'>
      {tasks.map((task) => (
        <Reorder.Item
          key={task.id}
          value={task}
          whileDrag={{ scale: 1.02 }}
          className='flex items-center justify-between p-4 border rounded-lg bg-gray-100 hover:bg-gray-200 transition'
        >
          <span
            className={`flex-1 cursor-pointer ${
              task.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            {task.text}
          </span>
          <div className='w-1/2 flex justify-evenly'>
            <ActionButton
              label='Complete'
              taskId={task.id}
              taskAction={completeTask}
              btnColor='success'
              completed={task.completed}
            />
            <ActionButton
              taskId={task.id}
              label='Delete'
              taskAction={deleteTask}
              btnColor='error'
            />
          </div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export default TaskList;
