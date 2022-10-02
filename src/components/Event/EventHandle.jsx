import React, { useState } from 'react';

const EventHandle = () => {
    const [text, setText] = useState('Enter your text...');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <input type="text" onChange={handleChange} value={text}/>
            <p>{text}</p>
        </div>
    );
}

export default EventHandle;