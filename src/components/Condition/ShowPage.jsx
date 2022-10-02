import React, { useState } from 'react'
import Home from './Home';
import Login from './Login';

const ShowPage = () => {
    const [isLoggedIn, setLoggedIn] = useState(true);

    if (isLoggedIn) {
        setLoggedIn(false);
    }

    return (
        <div>
            {isLoggedIn && <Home />}
            {!isLoggedIn && <Login />}
        </div>
    );
}

export default ShowPage;