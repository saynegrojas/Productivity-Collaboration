import { Button, Tooltip } from '@mui/material';
import { MoonIcon, SunIcon } from 'lucide-react';

type ThemeToggleProps = {
  isDarkMode: boolean;
  handleThemeChange: () => void;
};
const ThemeToggle = ({ isDarkMode, handleThemeChange }: ThemeToggleProps) => (
  <div>
    <Tooltip title={isDarkMode ? 'Light theme' : 'Dark theme'}>
      <Button
        variant='text'
        size='small'
        className='rounded-lg text-slate-200'
        onClick={handleThemeChange}
      >
        {isDarkMode ? (
          <SunIcon size={16} className='absolute transition-all' />
        ) : (
          <MoonIcon size={16} className='rotate-0' />
        )}
      </Button>
    </Tooltip>
  </div>
);

export default ThemeToggle;
