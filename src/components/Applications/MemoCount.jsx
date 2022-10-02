import React, { useState, useMemo } from 'react';

const expensiveCalculation = (num) => {
    for(let i = 0; i < 1000000000; i ++){
        num += 1;
    }
    return num;
}

const MemoCount = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodo] = useState([]);
    const [todoCount, setTodoCount] = useState(1);
    const calculation = useMemo(() => {
        return expensiveCalculation(count);
    }, [count]);

    const addTodo = () => {
        setTodoCount((prevCount) => prevCount + 1);
        setTodo([...todos, `Todo ${todoCount}`]);
    }

    return (
        <div>
            <p><strong>Count: </strong><span>{count}</span></p>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement</button>
            <p><strong>My Todo</strong></p>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>
            })}
            <button onClick={addTodo}>Add Todo</button>
            <p><string>Calculation: </string><span>{calculation}</span></p>
        </div>
    );
}

export default MemoCount;