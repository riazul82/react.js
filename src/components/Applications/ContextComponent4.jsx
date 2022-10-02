import React, { useContext } from 'react';
import { UserContext } from './MyContext';

const ContextComponent4 = () => {
    const user = useContext(UserContext);

    return (
        <div>
            <h1>Hello, I am Component04</h1>
            <h1>Id: {user.id}</h1>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
        </div>
    );
}

export default ContextComponent4;