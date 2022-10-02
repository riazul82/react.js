import React, { useState } from 'react';

const bookList = [
    {id: Date.now(), name: 'The Flying Cow'},
    {id: Date.now() + 1, name: 'Inside Dark Fog'},
    {id: Date.now() + 2, name: 'Mid Night Dream'},
    {id: Date.now() + 3, name: 'The Hungry Dog'},
    {id: Date.now() + 4, name: 'Twinkle Meaw'}
];

const MyBookList = () => {
    const [books, setBooks] = useState(bookList);
    const [bookName, setBookName] = useState('');
    const [alertText, setAlertText] = useState('');
    const [addFlag, setAddFlag] = useState(false);
    const [removeFlag, setRemoveFlag] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setBooks((prevBooks) => [...prevBooks, {id: Date.now(), name: bookName}]);
        setAddFlag(true);
        setAlertText('Book added successfully!');
        setTimeout(() => {
            setAddFlag(false);
        }, 2000);
        setBookName('');
    }

    const handleRemove = (id) => {
        setBooks(
            books.filter((book) => {
                return (book.id !== id) ? book : null;
            })
        );
        setRemoveFlag(true);
        setAlertText('Book removed successfully!');
        setTimeout(() => {
            setRemoveFlag(false);
        }, 2000);
    }

    return (
        <div>
            <p><strong>Add Books</strong></p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                    placeholder="Enter book name"
                    autoComplete="off"
                    required
                />
                <button type="submit">Add book</button>
            </form>
            {addFlag && <p style={{color: 'green'}}>{alertText}</p>}
            {removeFlag && <p style={{color: 'red'}}>{alertText}</p>}
            <p style={{marginTop: '2rem'}}><strong>Book List</strong></p>
            {books.map((book, index) => {
                const {id, name} = book;
                return (
                    <div key={id}>
                        <span>{index + 1}. {name}</span>
                        <button onClick={() => handleRemove(id)}>Remove</button>
                    </div>
                );
            })}
        </div>
    );
}

export default MyBookList;