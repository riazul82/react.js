import React, { useState, useEffect, useRef } from 'react';

const StorePrevInputValue = () => {
    const [inputValue, setInputValue] = useState('');
    const prevInputValue = useRef('');

    useEffect(() => {
        prevInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <div>
            <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <p><strong>Input value: </strong><span>{inputValue}</span></p>
            <p><strong>Previous Input Value: </strong><span>{prevInputValue.current}</span></p>
        </div>
    );
}

export default StorePrevInputValue;