import { Button } from '@mui/material';
import { btnColor } from '../types/buttons';

interface ActionButtonProps {
  label: string;
  taskId: string;
  taskAction: (id: string) => void;
  completed?: boolean;
  btnColor: btnColor;
}

const ActionButton = ({
  label,
  taskId,
  taskAction,
  completed = false,
  btnColor = 'success',
}: ActionButtonProps) => (
  <Button
    variant='contained'
    className={`text-sm  px-4 py-2 rounded-lg transition`}
    onClick={() => taskAction(taskId)}
    disabled={completed}
    style={{
      backgroundColor: getButtonColor(btnColor, completed),
      width: '7rem',
    }}
  >
    {completed ? 'Done' : label}
  </Button>
);

/**
 * Determines the background color for an ActionButton component based on the button color and completion status.
 *
 * @param btnColor - The color of the button, either 'success' or 'error'.
 * @param completed - A boolean indicating whether the task associated with the button is completed.
 * @returns The background color for the button, or an empty string if the task is completed.
 */
const getButtonColor = (btnColor: string, completed: boolean) => {
  if (!completed) {
    return btnColor === 'success' ? '#10ca8c' : '#cb3618';
  } else {
    return '';
  }
};

export default ActionButton;
