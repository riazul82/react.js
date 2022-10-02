import React, { useEffect, useState } from 'react';

const Form = (props) => {
    const [user, setUser] = useState({username: '', email: ''});
    const { username, email } = user;

    useEffect(() => {
        setUser({
            username: props.selectedUser.username,
            email: props.selectedUser.email
        });
    }, [props.selectedUser]);

    const handleChange = (e) => {
        let fieldName = e.target.name;
        let fieldValue = e.target.value;

        setUser((prevState) => {
            return {...prevState, [fieldName]: fieldValue}
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSubmitUser(user);
        setUser({username: '', email: ''});
    }

    return (
        <div>
            <form action="/" onSubmit={handleSubmit}>
                <div className="input-field">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" value={username} onChange={handleChange} autoComplete="off" required />
                </div>

                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={email} onChange={handleChange} autoComplete="off" required />
                </div>

                <div className="button-field">
                    <button type="submit">{props.btnText}</button>
                </div>
            </form>
        </div>
    );
}

Form.defaultProps = {
    selectedUser: {
        username: '',
        email: ''
    }
}

export default Form;
