import React, { useRef } from 'react';

const InputRef = () => {
    let nameRef = useRef();
    let mailRef = useRef();
    let passRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(mailRef.current.value);
        console.log(passRef.current.value);
    }

    return (
        <div>
            <form action="/" onSubmit={handleSubmit}>
                <div className="input-field">
                    <input type="text" name="name" id="name" ref={nameRef} placeholder="Your name" autoComplete="off" required />
                </div>
                <div className="input-field">
                    <input type="email" name="email" id="email" ref={mailRef} placeholder="Your email" autoComplete="off" required />
                </div>
                <div className="input-field">
                    <input type="password" name="password" id="password" ref={passRef} placeholder="Your password" autoComplete="off" required />
                </div>
                <div className="button-fie">
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}

export default InputRef;