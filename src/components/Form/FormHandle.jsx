import React, { useState } from 'react';

const FormHandle = () => {
    const [user, setUser] = useState({name: '', email: '', password: ''});
    const {name, email, password} = user;

    const fromWrap = {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const inputField = {
        marginTop: '1rem',
        height: '45px',
        width: '100%'
    }

    const inputStyle = {
        padding: '0 1rem',
        height: '100%',
        width: '100%',
        border: '2px dashed #333',
        outline: 'none',
        color: '#333',
        fontSize: '1.2rem',
        boxSizing: 'border-box'
    }

    const buttonField = {
        marginTop: '2rem',
        display: 'flex',
        width: '100%',
        justifyContent: 'center'
    }

    const buttonStyle = {
        height: '2.8rem',
        width: '10rem',
        color: '#fff',
        fontSize: '1.2rem',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        background: 'green'
    }

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        setUser({name: '', email: '', password: ''});
    }

    return (
        <div style={fromWrap}>
            <div style={{color: '#111', fontSize: '1.2rem'}}>
                <h1>SignUp</h1>
            </div>
            <form action="/" style={{marginTop: '1rem', width: '380px'}} onSubmit={handleSubmit}>
                <div style={inputField}>
                    <input style={inputStyle} type="text" name="name" id="name" onChange={handleChange} placeholder="Your name" value={name} autoComplete="off" required />
                </div>

                <div style={inputField}>
                    <input style={inputStyle} type="email" name="email" id="email" onChange={handleChange} placeholder="Your email" value={email} autoComplete="off" required />
                </div>

                <div style={inputField}>
                    <input style={inputStyle} type="password" name="password" id="password" onChange={handleChange} placeholder="Your password" value={password} autoComplete="off" required />
                </div>

                <div style={buttonField}>
                    <button style={buttonStyle} type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default FormHandle;