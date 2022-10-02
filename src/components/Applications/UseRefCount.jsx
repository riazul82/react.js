import React, { useState, useEffect, useRef } from 'react';

const UseRefCount = () => {
    const [flag, setFlag] = useState(true);
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    }, [flag]);

    return (
        <div>
            <p>I am tracking renders!</p>
            <h1>Count: {count.current}</h1>
            <button onClick={() => {flag ? setFlag(false) : setFlag(true)}}>Click Me</button>
        </div>
    );
}

export default UseRefCount;