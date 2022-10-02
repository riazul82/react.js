import React from 'react';
import Component2 from './Component2';
import { UserContext } from './UserContext';
// If just export (not default export) use {} to import

const Component1 = () => {
    const user = {
        id: 1001,
        name: 'Meaw',
        email: 'meaw@gmail.com'
    }

    return (
        <UserContext.Provider value={user}>
            <Component2 />
        </UserContext.Provider>
    );
}

export default Component1;