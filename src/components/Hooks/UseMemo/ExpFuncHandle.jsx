import React, { useState, useMemo } from 'react';

const ExpFuncHandle = () => {
    const [count, setCount] = useState(0);

    const memoizedNumber = useMemo(() => {
        let number = 0;
        for(let i = 0; i < 1000000000; i ++) {
            number ++;
        }
        return number;
    }, []);

    return (
        <div>
            <p>{memoizedNumber}</p>
            <p><strong>Count value: </strong><span>{count}</span></p>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
        </div>
    );
}

export default ExpFuncHandle;