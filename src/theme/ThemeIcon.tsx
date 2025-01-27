import { MoonIcon, SunIcon } from 'lucide-react';

const ThemeIcon: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) =>
  isDarkMode ? (
    <SunIcon size={16} className='absolute transition-all' />
  ) : (
    <MoonIcon size={16} className='rotate-0' />
  );

export default ThemeIcon;
