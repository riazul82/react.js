import React, { useState, useRef } from 'react';

const FocusInput = () => {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef();

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleFocus = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <input 
                type="text"
                value={inputValue}
                onChange={handleChange}
                ref={inputRef}
            />
            <button onClick={handleFocus}>Focus Input</button>
        </div>
    )
}

export default FocusInput;