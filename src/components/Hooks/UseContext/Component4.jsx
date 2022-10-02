import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Component4 = () => {
    const user = useContext(UserContext);

    return (
        <div>
            <p><strong>Name: </strong><span>{user.name}</span></p>
            <p><strong>Email: </strong><span>{user.email}</span></p>
        </div>
    );
}

export default Component4;