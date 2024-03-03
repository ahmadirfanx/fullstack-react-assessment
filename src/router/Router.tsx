import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

// Components
import HomePage from '../Components/Screens/HomePage/HomePage';
import UsersPage from '../Components/Screens/UsersPage/UsersPage';


function Router() {
    return (
        <BrowserRouter>
            <div>
                <Routes>


                    {/* All Routes */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/users" element={<UsersPage />} />

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default Router;