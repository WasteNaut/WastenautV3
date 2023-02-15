import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header.js';
// import { useUser } from './Components/context/UserContext.js';
import Auth from './Components/Auth/Auth.js';
import List from './Components/List/List.js';

function App() {
    // const { user } = useUser();
    return (
        <div className='App'>
            <Header />
            <Routes>

                <Route path='/auth' element={<Auth />} />
                <Route path='/' element={<List />}>
                    {/* <>
                        {user && <Navigate to='/list' />}
                        {!user && <Navigate to='/auth/sign-in' />}
                    </> */}
                </Route>
            </Routes>
        </div>
    );
}

export default App;