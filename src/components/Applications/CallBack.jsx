import React, { useState, useCallback } from 'react';
import Todos from './Todos';

const CallBack = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    }

    const addTodo = useCallback(() => {
        setTodos((todo) => [...todo, "New todos"]);
    }, []);

    return (
        <div>
            <Todos todos={todos} addTodo={addTodo} />
            <br />
            <div>
                <p><strong>Const: </strong><span>{count}</span></p>
                <button onClick={increment}>Increment</button>
            </div>
        </div>
    );
}

export default CallBack;