import React, { useState, useEffect, useRef } from 'react';

const TrackPrevState = () => {
    const [inputValue, setInputValue] = useState('');
    const prevInputValue = useRef('');

    useEffect(() => {
        prevInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <div>
            <p>I am tracking previous value!</p>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <p><strong>Current Value:</strong> {inputValue}</p>
            <p><strong>Previous Value:</strong> {prevInputValue.current}</p>
        </div>
    );
}

export default TrackPrevState;