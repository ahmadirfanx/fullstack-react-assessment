// Importing necessary dependencies from React, Material-UI, and Framer Motion
import React from 'react';
import { Card, Typography, Avatar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

// Styling for the card component using Material-UI's styled API
const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    borderRadius: '12px',
    marginBottom: theme.spacing(2),
    alignItems: 'center',
    padding: theme.spacing(2),
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
        boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)'
    }
}));

// Styling for the user information section within the card
const UserInfo = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: theme.spacing(2),
}));

// Type definition for the User object
interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

// Props interface for the UserCard component
interface UserCardProps {
    user: User;
}

/**
 * Represents a UserCard component that displays a user's information including their name, email, and avatar.
 * The component uses Material-UI for styling and layout, and Framer Motion for entrance animations,
 * providing a visually appealing way to present user data. The card is designed to be flexible and reusable,
 * with a structured layout that includes an avatar alongside the user's name and email.
 * 
 * Props:
 *  - user: An object containing details about the user such as id, email, first name, last name, and avatar URL.
 * 
 * This component demonstrates how to effectively combine static content with dynamic animations
 * to enhance user interface experiences.
 */
const UserCard: React.FC<UserCardProps> = ({ user }) => {

    // Animation variants for the card, defining how it should animate into view
    const cardVariants = {
        offscreen: {
            y: 40, // Initial position offscreen
            opacity: 0, // Start fully transparent
        },
        onscreen: {
            y: 0, // End at the original position
            opacity: 1, // Fully opaque
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return (
        // The motion.div container enables animation effects for the card
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={cardVariants}
        >
            <StyledCard>
                <Avatar
                    alt={`${user.first_name} ${user.last_name}`} // Accessibility label for the avatar
                    src={user.avatar} // Source URL for the user's avatar image
                    sx={{ width: 56, height: 56 }} // Styling for the avatar
                    imgProps={{ loading: 'lazy' }} // Enables lazy loading for the image
                />
                <UserInfo>
                    <Typography variant="h6">{`${user.first_name} ${user.last_name}`}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {user.email}
                    </Typography>
                </UserInfo>
            </StyledCard>
        </motion.div>
    );
};

export default UserCard;
