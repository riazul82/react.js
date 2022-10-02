import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const buttonStyle = {
        margin: '0 1rem',
        height: '2rem',
        width: '2rem',
        color: '#fff',
        fontSize: '1.4rem',
        fontWeight: 'bold',
        background: 'steelblue',
        border: 'none',
        outline: 'none',
        cursor: 'pointer'
    }

    const handleIncrement = () => {
        setCount((count) => count + 1);
    }

    const handleDecrement = () => {
        setCount((count) => count - 1);
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <div style={{marginTop: '1rem'}}>
                <button style={buttonStyle} onClick={handleIncrement}>+</button>
                <button style={buttonStyle} onClick={handleDecrement}>-</button>
            </div>
        </div>
    )
}

export default Counter;