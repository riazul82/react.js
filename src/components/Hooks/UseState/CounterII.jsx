import React, { useState } from 'react';

const CounterII = () => {
    const [count, setCount] = useState(0);
    
    const buttonStyle = {
        height: '3rem',
        width: '5rem',
        color: '#fff',
        fontSize: '1.2rem',
        background: 'orangered',
        border: 'none',
        outline: 'none',
        cursor: 'pointer'
    }

    const countStyle = {
        color: '#333',
        fontSize: '2rem',
        padding: '0 2rem'
    }

    return (
        <div>
            <button style={buttonStyle} onClick={() => setCount((prevCount) => prevCount - 1)}>DEC</button>
            <span style={countStyle}>{count}</span>
            <button style={buttonStyle} onClick={() => setCount((prevCount) => prevCount + 1)}>INC</button>
        </div>
    );
}

export default CounterII;