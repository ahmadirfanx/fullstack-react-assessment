import React, { useEffect, useState, useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import { fetchUsers } from '../../api/users';
import Loader from '../../components/Loader/Loader';
import UserCard from '../../components/UserCard/UserCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import Header from '../../components/Header/Header';
import { Box, Container, Grid, Typography } from '@mui/material';

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
    const {
        data,
        isLoading,
        hasNextPage,
        fetchNextPage,
    } = useInfiniteQuery(
        'users',
        ({ pageParam = 1 }) => fetchUsers(pageParam), // Dynamically fetches users based on the page parameter.
        {
            getNextPageParam: (lastPage) => {
                // Determines the next page to be fetched, ensuring pagination works correctly.
                return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined;
            },
            cacheTime: 1000 * 60 * 5, // Specifies how long fetched data is cached.
            staleTime: 1000 * 60, // Specifies how long fetched data is considered fresh.
            refetchOnWindowFocus: true, // Refetches data when the window regains focus, ensuring data freshness.
        }
    );

    const [loading, setLoading] = useState<boolean>(true); // Manages the loading state separately for initial data loading.
    const containerRef = useRef<HTMLDivElement>(null); // Ref for the container to manage scroll events and checks.

    useEffect(() => {
        // Simulates a loading state to demonstrate asynchronous data fetching.
        const timer = setTimeout(() => {
            setLoading(false);
        }, 200);
        return () => clearTimeout(timer); // Cleanup to prevent memory leaks.
    }, []);


    return (
        <Container maxWidth="lg">

            <Header previousPageName="Home" />

            {/* Display loader when either initial loading or fetching of data is in progress */}
            {loading || isLoading ? (
                <Loader />
            ) : (
                <Box sx={{ flexGrow: 1, minHeight: '100vh' }} ref={containerRef}>
                    <Typography variant="h4" component="h1" gutterBottom sx={{ marginTop: 4, textAlign: 'center' }}>
                        User Directory
                    </Typography>

                    {/* InfiniteScroll component to enable fetching more data as the user scrolls */}
                    <InfiniteScroll
                        dataLength={data?.pages?.flatMap(page => page.data).length ?? 0}
                        next={fetchNextPage} // Function to fetch the next page of data.
                        hasMore={!!hasNextPage} // Indicates if more data is available for fetching.
                        loader={<Typography variant="overline">Scroll to fetch more</Typography>} // Loader displayed during data fetching.
                        endMessage={
                            <Typography variant="subtitle1" sx={{ textAlign: 'center', marginTop: 2 }}>
                                No more users {/* Message displayed when all data has been fetched. */}
                            </Typography>
                        }
                    >

                        {/* Grid to show the list of all Users */}
                        <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center">
                            {data?.pages?.flatMap(page => page.data).map((user: User) => (
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

