import React from 'react'
import useAddition from './useAddition';

const AddValues = () => {
    const { sum } = useAddition([1, 2, 3]);

    return (
        <div>
            <p><strong>Sum: </strong><span>{ sum }</span></p>
        </div>
    );
}

export default AddValues;