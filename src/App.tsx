import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme/theme';
import { RootState } from './store/store'
import Router from './router/Router';
import './App.css';

const queryClient = new QueryClient();

function App() {
  const themeMode = useSelector((state: RootState) => state.theme.themeMode);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
        <Router></Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
