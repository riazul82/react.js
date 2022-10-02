import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [newUser, setUser] = useState('');

    const getUserData = (user) => {
        setUser(user);
    }

    return (
        <div>
            <Child userId={101} userName={'Hello'} userAge={200} userData={getUserData} />
            <p>{newUser.id} {newUser.name} {newUser.age}</p>
        </div>
    );
}

export default Parent;