import React, { useState, useEffect, useRef } from 'react';

const RenderCountII = () => {
    const [flag, setFlag] = useState(true);
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    }, [flag]);

    return (
        <div>
            <h1>Render count: { count.current }</h1>
            <button onClick={() => flag ? setFlag(false) : setFlag(true)}>Change State</button>
        </div>
    );
}

export default RenderCountII;