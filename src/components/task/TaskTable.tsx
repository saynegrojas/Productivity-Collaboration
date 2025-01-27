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
import { Task } from '../../interfaces/task';
import { TableCellAlign } from '../../types/table-cell-alignments';
import LoadingSpinner from '../LoadingSpinner';
import { TASK_TABLE_HEADERS } from '../../utils/constants';
import TaskTableRow from './TaskTableRow';
import NoTasks from './NoTasks';

interface TaskTableProps {
  loading: boolean;
  tasks: Task[];
  completeTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskTable: React.FC<TaskTableProps> = ({ loading, tasks, completeTask, deleteTask }) => {
  const renderTableHead = () => (
    <TableHead className='bg-slate-500'>
      <TableRow>
        {TASK_TABLE_HEADERS.map(({ align, label }, index) => (
          <TableCell key={index} align={align as TableCellAlign}>
            {label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );

  if (loading) return <LoadingSpinner />;

  return (
    <Paper className='m-auto w-full'>
      <TableContainer component={Paper} role='table' aria-label='Task Table'>
        {!tasks.length ? (
          <NoTasks />
        ) : (
          <Table>
            {/* Headers */}
            {renderTableHead()}
            <TableBody>
              {tasks.map((task) => (
                <TaskTableRow
                  key={task.id}
                  task={task}
                  onComplete={completeTask}
                  onDelete={deleteTask}
                />
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </Paper>
  );
};
export default TaskTable;
