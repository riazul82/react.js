import React from 'react';
import ContextComponent2 from './ContextComponent2';
import { UserContext } from './MyContext';

const ContextComponent1 = () => {
    const user = {id: 1, name: 'Riazul', age: 24};

    return (
        <UserContext.Provider value={user}>
            <ContextComponent2 />
        </UserContext.Provider>
    );
}

export default ContextComponent1;