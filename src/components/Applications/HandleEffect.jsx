import React, { useState, useEffect } from 'react';

const HandleEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Hello!');
    }, [count]);

    return (
        <div>
            <h1 style={{margin: "0 1rem", padding: "1rem"}}>{count}</h1>
            <div style={{marginTop: "1rem"}}>
                <button style={{margin: "0 1rem", padding: "1rem"}} onClick={() => {setCount((count) => count + 1)}}>Increment</button>
                <button style={{margin: "0 1rem", padding: "1rem"}} onClick={() => {setCount((count) => count - 1)}}>Decrement</button>
            </div>
        </div>
    );
}

export default HandleEffect;