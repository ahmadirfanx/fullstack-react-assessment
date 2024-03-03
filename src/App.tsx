import React from 'react';
import { useSelector } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme/theme';
import { RootState } from './store/store'
import Router from './router/Router';
// Global CSS styles
import './App.css';

// Creating a new query client instance for React Query
const queryClient = new QueryClient();

function App() {
  // Accessing the current theme mode ('light' or 'dark') from the Redux store
  const themeMode = useSelector((state: RootState) => state.theme.themeMode);

  return (
    // Providing the React Query client to the app for enabling data fetching/caching
    <QueryClientProvider client={queryClient}>
      {/* 
        Applying the theme based on the current theme mode.
        ThemeProvider injects the theme into all styled components down the component tree.
      */}
      <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
        {/* 
          Router component that manages navigation and rendering of different screens/components 
          based on the current URL path.
        */}
        <Router></Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
