import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import Message from './Message';

const CallBack = () => {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);

    const handleIncreaseMessage = useCallback(() => {
        setCount((prev) => prev + 1);
    }, [count]);

    return (
        <div>
            {console.log(`I am app!`)}
            <p>{toggle ? 'ON' : 'OFF'}</p>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            <p><strong>Count:</strong><span>{count}</span></p>
            <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
            <Message messageCount={count} increaseMessage={handleIncreaseMessage}/>
        </div>
    );
}

export default CallBack;