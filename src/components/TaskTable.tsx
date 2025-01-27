import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import ActionButton from './ActionButton';
import { Task } from '../interfaces/task';
import { TableCellAlign } from '../types/table-cell-alignments';

interface TaskTableProps {
  tasks: Task[];
  completeTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskTable: React.FC<TaskTableProps> = ({ tasks, completeTask, deleteTask }) => {
  const headers = [
    { label: 'Task', align: 'left' },
    { label: 'Actions', align: 'center' },
  ];

  const renderTableHead = () => (
    <TableHead className='bg-slate-500'>
      <TableRow>
        {headers.map((header, index) => (
          <TableCell key={index} align={header.align as TableCellAlign} className='text-slate-200'>
            {header.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );

  const renderNoTasks = () => (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell colSpan={2} className='flex justify-center p-5 w-full'>
            No tasks yet
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );

  return (
    <Paper className='m-auto w-full'>
      <TableContainer component={Paper}>
        {!tasks.length ? (
          renderNoTasks()
        ) : (
          <Table>
            {/* Headers */}
            {renderTableHead()}
            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell className={task.completed ? 'line-through' : 'none'}>
                    {task.text}
                  </TableCell>
                  {/* Action Buttons */}
                  <TableCell className='flex justify-evenly items-center'>
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
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </Paper>
  );
};
export default TaskTable;
