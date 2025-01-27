import { Button, Tooltip } from '@mui/material';
import ThemeIcon from './ThemeIcon';

interface ThemeToggleProps {
  isDarkMode: boolean;
  handleThemeChange: () => void;
}

const ThemeToggle = ({ isDarkMode, handleThemeChange }: ThemeToggleProps) => (
  <div>
    <Tooltip title={isDarkMode ? 'Light theme' : 'Dark theme'}>
      <Button
        variant='text'
        size='small'
        className='rounded-lg text-slate-200'
        onClick={handleThemeChange}
      >
        <ThemeIcon isDarkMode={isDarkMode} />
      </Button>
    </Tooltip>
  </div>
);

export default ThemeToggle;
