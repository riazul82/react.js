import React, { useState, useEffect, useRef } from 'react';

const RenderCount = () => {
    const [inputValue, setInputValue] = useState('');
    const count = useRef(0);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    useEffect(() => {
        count.current = count.current + 1;
    });

    return (
        <div>
            <input 
                type="text"
                value={inputValue} 
                onChange={handleChange}
            />
            <p>{count.current} times rendered!</p>
        </div>
    );
}

export default RenderCount;