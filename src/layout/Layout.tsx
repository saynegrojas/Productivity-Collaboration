import { ThemeProvider } from '@emotion/react';
import { SocketProvider } from '../context/SocketContext';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { darkTheme, lightTheme } from '../theme/theme';

interface RootLayoutProps {
  children: React.ReactNode;
  isDarkMode: boolean;
};

const RootLayout = ({ children, isDarkMode }: RootLayoutProps) => (
  <>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <SocketProvider>{children}</SocketProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </>
);


export default RootLayout;
