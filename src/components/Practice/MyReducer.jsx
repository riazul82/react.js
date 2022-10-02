import React, { useReducer } from 'react';

const initialTodos = [
    {
        id: 1,
        title: 'Todo 01',
        complete: false
    },
    {
        id: 2,
        title: 'Todo 02',
        complete: false
    }
];

const reducer = (state, action) => {
    switch(action.type) {
        case 'COMPLETE':
            return state.map((todo) => {
                if(todo.id === action.id) {
                    return { ...todo, complete: !todo.complete }
                } else {
                    return todo;
                }
            })
        default:
            return state;
    }
}

const MyReducer = () => {
    const [todos, dispatch] = useReducer(reducer, initialTodos);

    const handleChange = (todo) => {
        dispatch({ type: 'COMPLETE', id: todo.id });
    }

    return (
        <div>
            {todos.map((todo) => {
                return (
                    <div key={todo.id}>
                        <label>
                            <input 
                                type="checkbox"
                                checked={todo.complete}
                                onChange={() => handleChange(todo)}
                            />
                            {todo.title}
                        </label>
                    </div>
                );
            })}
        </div>
    )
}

export default MyReducer;