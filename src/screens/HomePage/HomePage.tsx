import React, { useState } from 'react';
import { Button, Box, Typography, useMediaQuery, useTheme, Link, Paper, Modal } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import TypeWriter from '../../components/Typewriter/Typewriter';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { mainBoxStyle, buttonStyle, footerTextStyle, modalStyle } from './HomePage.styles';
import Favorite from '@mui/icons-material/Favorite';

// Defines the structure and functionality of the HomePage component.
const HomePage: React.FC = () => {

    // Hooks for navigation and responsive design.
    const navigate = useNavigate();
    const theme = useTheme();

    // State management for modal visibility.
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    // Function to navigate to the user directory page.
    const handleNavigate = () => navigate('/users');

    return (
        <>
            {/* Displaying the header component without a previous page name, indicating it's the root page. */}
            <Header previousPageName="" />

            {/* Main content box with styles applied from HomePage.styles.js */}
            <Box sx={mainBoxStyle}>

                {/* Typewriter effect for engaging introduction text. */}
                <Typography variant="h6" gutterBottom>
                    <TypeWriter words={['Hey Hiring Manager', 'Welcome to Ombori Assessment.', `You'll find Infinite Scroll...`,
                        'Responsiveness for all screens...', 'Light/Dark Modes...', 'Caching (react-query)...']} />
                </Typography>

                {/* Button to navigate to the User Directory page, showcasing site features. */}
                <Button
                    variant="outlined"
                    endIcon={<ArrowForwardIosIcon />}
                    onClick={handleNavigate}
                    sx={buttonStyle}
                >
                    Explore User Directory
                </Button>

                {/* Button to open a modal for FAQs. */}
                <Button variant="text" onClick={handleOpen} sx={{ mt: 2 }}>
                    Have Questions? Ask Away!
                </Button>

                {/* Modal component for displaying FAQs, with open/close state managed by component state. */}
                <Modal open={open} onClose={handleClose}>
                    <Paper sx={modalStyle}>
                        <Typography variant="h6" component="h2">
                            Frequently Asked Questions
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            Here are some common questions our visitors ask. Feel free to reach out for more!
                        </Typography>
                    </Paper>
                </Modal>

                {/* Footer text styled to show appreciation and personal branding. */}
                <Typography sx={footerTextStyle}>
                    Made for Ombori with <Favorite sx={{ color: 'red', mx: 0.5 }} /> by Ahmad Irfan
                </Typography>

                {/* Link to connect on LinkedIn for networking and professional opportunities. */}
                <Link
                    href="https://linkedin.com/in/ahmadirfanx"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Connect on LinkedIn
                </Link>
            </Box>
        </>
    );
};

export default HomePage;
