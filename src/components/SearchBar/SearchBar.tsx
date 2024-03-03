import React, { useState } from 'react';
import { Box, IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {

    // UI Control Variable
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded((prev) => !prev);
    };


    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4, my: 1 }}>
            <Paper
                component="form"
                variant='outlined'
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    maxWidth: '100%',
                    width: isExpanded ? '100%' : 'auto',
                    transition: 'width 300ms ease',
                    marginLeft: isExpanded ? '0' : 'auto', // Keep the search bar right-aligned when not expanded
                }}
            >
                {isExpanded && (
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search users..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        autoFocus
                    />
                )}
                <IconButton sx={{ p: '10px' }} aria-label="search" onClick={handleExpand} disableRipple>
                    {isExpanded ? <CloseIcon onClick={() => setSearchQuery('')} /> : <SearchIcon />}
                </IconButton>
            </Paper>
        </Box>
    );
};

export default SearchBar;