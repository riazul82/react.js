import React, { useState } from 'react';

const bookList = [
    {id: 1, name: 'Mr. Jhon'},
    {id: 2, name: 'Mr. Don'},
    {id: 3, name: 'Dr. Meaw'}
];

const MyBooks = () => {
    const [books, setBooks] = useState(bookList);
    const [bookName, setBookName] = useState('');
    const [addAlert, setAddAlert] = useState('');
    const [flag, setFlag] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setBooks((prev) => {
            return [...prev, {id: books.length + 1, name: bookName}]
        });
        setBookName('');
        setFlag(true);
        setAddAlert('Book added successfully!');
        setTimeout(() => setFlag(false), 3000);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={bookName} 
                    onChange={(e) => setBookName(e.target.value)}
                    placeholder="Enter book name"
                />
                <button type="submit">Add Book</button>
            </form>
            {flag && <p>{addAlert}</p>}
            <p style={{marginTop: '2rem'}}><strong>Book List</strong></p>
            <ul>
                {books.map((book) => {
                    const {id, name} = book;
                    return <li key={id}>{id}. {name}</li>
                })}
            </ul>
        </div>
    );
}

export default MyBooks;