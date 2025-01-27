import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5f7bb3',
    },
    secondary: {
      main: '#06928d', // Pink
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#446fc6', // Light Blue
    },
    secondary: {
      main: '#4c6de3', // Pink
    },
    background: {
      default: '#121212',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});
