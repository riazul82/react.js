import React, { useRef } from 'react';
import { useState } from 'react';

const AccessDOM = () => {
    const [userData, setUserData] = useState();
    const [isAddedUser, setIsAddedUser] = useState(false);

    const inputTextRef = useRef();
    const inputEmailRef = useRef();
    const inputPasswordRef = useRef();

    const inputMargin = {
        marginBottom: '0.6rem'
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let name = inputTextRef.current.value;
        let email = inputEmailRef.current.value;
        let password = inputPasswordRef.current.value;

        if (name === '' || name === null) {
            alert('Please enter your name first!');
            inputTextRef.current.focus();
            return;
        }

        if (email === '' || email === null) {
            alert('Please enter your email!');
            inputEmailRef.current.focus();
            return;
        }

        if (password === '' || password === null) {
            alert('Please enter your password!');
            inputPasswordRef.current.focus();
            return;
        }

        let newUser = {
            name: inputTextRef.current.value,
            email: inputEmailRef.current.value,
            password: inputPasswordRef.current.value
        }

        setIsAddedUser(true);
        setUserData(newUser);
    }

    return (
        <div style={{marginTop: '1rem'}}>
            <p>Hey! fill up this...</p>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', width: '200px'}}>
                <input style={inputMargin} type="text" name="name" ref={inputTextRef} placeholder="Your name" />
                <input style={inputMargin} type="email" name="email" ref={inputEmailRef} placeholder="Your email" />
                <input style={inputMargin} type="password" name="password" ref={inputPasswordRef} placeholder="Your password" />
                <button type="submit">Submit</button>
            </form>

            {isAddedUser && <p><strong>Name: </strong>{userData.name} <br/> <strong>Email: </strong> {userData.email} <br/> <strong>Password: </strong> {userData.password}</p>}
        </div>
    );
}

export default AccessDOM;