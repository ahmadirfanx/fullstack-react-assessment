import React from 'react';
import { Box } from '@mui/material'; // Importing Box component from Material-UI for layout
import './Loader.css'; // Importing custom CSS for loader animations

/**
 * Loader component displays a loading animation.
 * 
 * This component uses Material-UI's Box component to center the custom loader animation
 * within the viewport. The loader consists of two parts, an inner circle and an outer circle,
 * styled and animated using CSS for a visually appealing loading indicator.
 */
const Loader: React.FC = () => {
    return (
        // Using Box to create a flex container that centers its content horizontally and vertically
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <div className="loader">
                {/* The inner circle of the loader */}
                <div className="inner-circle"></div>
                {/* The outer circle of the loader */}
                <div className="outer-circle"></div>
            </div>
        </Box>
    );
};

export default Loader;
