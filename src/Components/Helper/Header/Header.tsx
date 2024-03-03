import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Hooks for interacting with Redux store
import { useNavigate } from 'react-router-dom'; // Hook for programmatic navigation
import { AppBar, Toolbar, IconButton, Typography, CssBaseline } from '@mui/material'; // Material-UI components for UI design
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'; // Icon for the back button
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Icon for dark mode toggle
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Icon for light mode toggle
import { RootState } from '../../../Store/store';

// Interface defining the props for the Header component
interface HeaderProps {
    previousPageName?: string; // Optional prop to specify the name of the previous page, used for the back button tooltip
}

/**
 * The Header component creates a navigation bar at the top of the page.
 * It includes a back button, application title, and a theme mode toggle button.
 * 
 * Props:
 * - previousPageName: A string to indicate the name of the previous page. If provided,
 *   a back button is displayed to navigate to the previous page.
 */
const Header: React.FC<HeaderProps> = ({ previousPageName = "" }) => {
    const dispatch = useDispatch(); // Hook to dispatch actions to the Redux store
    const themeMode = useSelector((state: RootState) => state.theme.themeMode); // Accessing the current theme mode from Redux store

    const navigate = useNavigate(); // Hook for programmatic navigation

    // Function to toggle the theme mode between light and dark
    const toggleThemeMode = () => {
        dispatch({ type: 'TOGGLE_THEME' });
    };

    return (
        <>
            <CssBaseline />
            <AppBar position="fixed" sx={{
                backgroundColor: '#ffffff', // Setting a light background color for the AppBar
                color: '#333', // Text color for contrast against the light AppBar background
                boxShadow: 'none', // Removing the default shadow for a flat design aesthetic
                borderBottom: '1px solid #eeeeee', // Adding a subtle border for visual separation
                width: '100%', // Ensuring the AppBar spans the full width of the viewport
                zIndex: (theme) => theme.zIndex.drawer + 1, // Ensuring AppBar stays on top of other content
            }}>
                <Toolbar>
                    {previousPageName && (
                        <IconButton
                            edge="start"
                            sx={{ color: '#333' }} // Matching the back arrow color with the text color
                            onClick={() => navigate(-1)} // Navigating back on click
                            aria-label="back" // Accessibility label for the back button
                        >
                            <ArrowBackIosNewIcon />
                        </IconButton>
                    )}
                    {/* Application title, centered in the AppBar */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', color: '#333' }}>
                        {'Ombori'}
                    </Typography>

                    {/* Displaying the appropriate icon based on the current theme mode */}
                    <IconButton onClick={toggleThemeMode} color="inherit">
                        {themeMode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    );
};

export default Header;
