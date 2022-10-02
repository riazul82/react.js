import React, { useState, useReducer } from 'react';

const bookList = [
    {id: Date.now(), name: 'The Flying Cow'},
    {id: Date.now() + 1, name: 'Inside Dark Fog'},
    {id: Date.now() + 2, name: 'Mid Night Dream'},
    {id: Date.now() + 3, name: 'The Hungry Dog'},
    {id: Date.now() + 4, name: 'Twinkle Meaw'}
];

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            return ({
                ...state,
                books: [...state.books, {id: Date.now(), name: action.payload}],
                alertText: 'Book added successfully!',
                addFlag: true
            });

        case 'REMOVE':
            return ({
                ...state,
                books: state.books.filter((book) => {
                    return (action.payload !== book.id) ? book : null;
                }),
                alertText: 'Book removed successfully!',
                removeFlag: true
            });

        case 'REMOVE_ADD_ALERT':
            return ({
                ...state,
                addFlag: false
            });
        
        case 'REMOVE_DELETE_ALERT':
            return ({
                ...state,
                removeFlag: false
            });

        default:
            return state;
    }
}

const MyBookListReducer = () => {
    const [bookState, dispatch] = useReducer(reducer, {books: bookList, alertText: '', addFlag: false, removeFlag: false});
    const [bookName, setBookName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD', payload: bookName});
        setTimeout(() => {
            dispatch({type: 'REMOVE_ADD_ALERT'});
        }, 2000);
        setBookName('');
    }

    const handleRemove = (id) => {
        dispatch({type: 'REMOVE', payload: id});
        setTimeout(() => {
            dispatch({type: 'REMOVE_DELETE_ALERT'});
        }, 2000);
    }

    return (
        <div>
            <p><strong>Add Book</strong></p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                    placeholder="Enter book name"
                    required
                />
                <button type="submit">Add book</button>
            </form>
            {bookState.addFlag && <p style={{color: 'green'}}>{bookState.alertText}</p>}
            {bookState.removeFlag && <p style={{color: 'red'}}>{bookState.alertText}</p>}
            <p style={{marginTop: '2rem'}}><strong>Book List:</strong></p>
            {bookState.books.map((book, index) => {
                const {id, name} = book;
                return (
                    <div key={id}>
                        <span>{index + 1}. {name}</span>
                        <button type="submit" onClick={() => handleRemove(id)}>Remove</button>
                    </div>
                )
            })}
        </div>
    );
}

export default MyBookListReducer;