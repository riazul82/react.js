import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {count: state.count + 1};
        case 'DECREMENT':
            return {count: state.count - 1};
        default:
            return state;
    }
}

const ReducerCount = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    const handleInc = () => {
        dispatch({type: 'INCREMENT'});
    }

    const handleDec = () => {
        dispatch({type: 'DECREMENT'});
    }

    return (
        <div>
            <button onClick={handleInc}>Increment</button>
            <p>{state.count}</p>
            <button onClick={handleDec}>Decrement</button>
        </div>
    );
}

export default ReducerCount;