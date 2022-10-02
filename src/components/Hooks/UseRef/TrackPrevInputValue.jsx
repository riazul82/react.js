import React, { useState, useEffect, useRef } from 'react';

const TrackPrevInputValue = () => {
    const [inputValue, setInputValue] = useState('');
    const prevInput = useRef('');

    const inputStyle = {
        color: '#222',
        fontSize: '1.2rem',
        paddingLeft: '0.6rem',
        height: '45px',
        width: '280px',
        border: '2px solid #333',
        outline: 'none'
    }

    const prevInputStyle = {
        marginTop: '1rem',
        fontSize: '1.2rem'
    }

    useEffect(() => {
        prevInput.current = inputValue;
    }, [inputValue]);

    return (
        <div>
            <input style={inputStyle} type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter your text..." />
            <p style={prevInputStyle}><strong>Previos input: </strong> {prevInput.current}</p>
        </div>
    );
}

export default TrackPrevInputValue;