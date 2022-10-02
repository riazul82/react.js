import React, { memo } from 'react';

const CountStatus = ({countValue, increaseCount}) => {
    return (
        <div>
            {console.log('Hello')}
            <p>{countValue} times counted!</p>
            <button onClick={increaseCount}>Increase count</button>
        </div>
    );
}

export default memo(CountStatus);