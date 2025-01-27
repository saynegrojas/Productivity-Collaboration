import { ThemeProvider } from '@emotion/react';
import { SocketProvider } from '../context/SocketContext';
import { CssBaseline, StyledEngineProvider, Switch } from '@mui/material';
import { darkTheme, lightTheme } from '../theme/theme';
import { useState } from 'react';
import ThemeToggle from '../theme/theme-toggle';

type RootLayoutProps = {
  children: React.ReactNode;
  isDarkMode: boolean;
};

const RootLayout = ({ children, isDarkMode }: RootLayoutProps) => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          <SocketProvider>{children}</SocketProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
};

export default RootLayout;
