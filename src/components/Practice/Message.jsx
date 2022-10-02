import React, { memo } from 'react';

const Message = ({messageCount, increaseMessage}) => {
    return (
        <div>
            {console.log(`I am Message!`)}
            <p>{messageCount} message sent!</p>
            <button onClick={increaseMessage}>Increase Message</button>
        </div>
    )
}

export default memo(Message);