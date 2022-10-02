import React, { useState, useCallback } from 'react';
import CountStatus from './CountStatus';

const IsolateFunc = () => {
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);

    const handleIncrease = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    return (
        <div>
            <span>{flag ? 'true' : 'false'}</span>
            <button onClick={() => setFlag(!flag)}>Click Me</button>
            <p><strong>Count value: </strong><span>{count}</span></p>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
            <CountStatus countValue={count} increaseCount={handleIncrease} />
        </div>
    );
}

export default IsolateFunc;
