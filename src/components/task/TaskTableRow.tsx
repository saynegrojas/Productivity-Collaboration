import { TableCell, TableRow } from '@mui/material';
import ActionButton from '../ActionButton';
import { Task } from '../../interfaces/task';

interface TaskTableRowProps {
  task: Task;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

/**
 * Renders a table row component for displaying a task in the TaskTable component.
 * The row includes the task text and action buttons for completing or deleting the task.
 */
const TaskTableRow: React.FC<TaskTableRowProps> = ({ task, onComplete, onDelete }) => {
  const { id, text, completed } = task;
  return (
    <TableRow className={completed ? 'bg-slate-400' : ''}>
      <TableCell className={completed ? 'line-through' : 'none'}>{text}</TableCell>
      <TableCell className='flex justify-evenly items-center'>
        <ActionButton
          label='Complete'
          taskId={id}
          taskAction={onComplete}
          btnColor='success'
          completed={completed}
        />
        <ActionButton taskId={id} label='Delete' taskAction={onDelete} btnColor='error' />
      </TableCell>
    </TableRow>
  );
};
export default TaskTableRow;
