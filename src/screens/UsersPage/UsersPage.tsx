import React, { useEffect, useState, useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import { fetchUsers } from '../../api/users';
import Loader from '../../components/Loader/Loader';
import UserCard from '../../components/UserCard/UserCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import Header from '../../components/Header/Header';
import { Box, Container, Grid, Typography } from '@mui/material';
import SearchBar from '../../components/SearchBar/SearchBar';


// Type definition for a User object based on API response structure.
interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

const UsersPage: React.FC = () => {

    /**
     * Utilizes React Query for data fetching and caching, providing infinite scroll functionality.
     */
    const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
        'users',
        ({ pageParam = 1 }) => fetchUsers(pageParam), // Dynamically fetches users based on the page parameter.
        {
            // Determines the next page to be fetched, ensuring pagination works correctly.
            getNextPageParam: (lastPage) => lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
            cacheTime: 1000 * 60 * 5, // Cached data time period
            staleTime: 1000 * 60, // Specifies how long fetched data is considered fresh.
            refetchOnWindowFocus: true, // Refetches data when the window regains focus, ensuring data freshness.
        }
    );

    // UI Control Vars
    const [loading, setLoading] = useState<boolean>(true); // Loader
    const containerRef = useRef<HTMLDivElement>(null); // Ref for the container to manage scroll events and checks.
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {

        // Simulates a loading state to demonstrate asynchronous data fetching.
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer); // Cleanup to prevent memory leaks.
    }, []);


    // Filter users based on search query
    const filteredUsers = data?.pages?.flatMap((page) => page.data)
        ?.filter((user) =>
            `${user.first_name} ${user.last_name}`.toLowerCase().includes(searchQuery.toLowerCase())
        ) || [];

    return (
        <Container maxWidth="lg">

            <Header previousPageName="Home" />

            {/* loader when either initial loading or fetching of data is in progress */}
            {(loading || isLoading) && <Loader />}

            {(!loading && !isLoading) && (
                <Box sx={{ flexGrow: 1, minHeight: '100vh' }} ref={containerRef}>

                    {/* Page Title & Search Bar */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>

                        {/* Page Title, with Adjustable Height for different Screens */}
                        <Typography variant="h4" component="h1" gutterBottom sx={{
                            fontSize: {
                                xs: '1.25rem', sm: '1.5rem', md: '2.125rem'
                            }
                        }}>User Directory</Typography>

                        {/* Search Bar */}
                        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                    </Box>


                    {/* InfiniteScroll component to enable fetching more data as the user scrolls */}
                    <InfiniteScroll
                        dataLength={filteredUsers.length}
                        next={fetchNextPage}
                        hasMore={!!hasNextPage}
                        loader={<Typography variant="overline">Scroll to load more</Typography>} // Loader displayed during data fetching.
                        endMessage={
                            <Typography variant="subtitle1" sx={{ textAlign: 'center', marginTop: 2 }}>
                                No more users
                            </Typography>
                        }
                    >

                        {/* Grid to show the list of all Users */}
                        <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
                            {filteredUsers.map((user: User) => (
                                <Grid item xs={12} md={6} key={user.id}>
                                    <UserCard user={user} />
                                </Grid>
                            ))}
                        </Grid>
                    </InfiniteScroll>
                </Box>
            )}

        </Container>
    );
};

export default UsersPage;

