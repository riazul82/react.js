import React, { useCallback, useEffect, useState } from 'react';
import Form from './Form';

const HandleAPI = () => {

    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const [slctedUser, setSlctedUser] = useState({username: '', email: ''});
    const [slctedId, setSlctedId] = useState('');
    const [updateFlag, setUpdateFlag] = useState(false);

    const url = `paste-api-url-here`;

    const getUsers = useCallback(() => {
        fetch(url)
        .then((res) => {
            if(!res.ok){
                throw new Error(`Error!`);
            }
            return res.json();
        })
        .then((data) => {
            setUser(data.users);
        })
        .catch((err) => {
            setError(err.message);
        })
        .finally(() => {
            setLoading(false);
        })

    }, [url]);

    const deleteUser = (id) => {
        fetch(url + `${id}`, {
            method: 'DELETE'
        })
        .then((res) => {
            if(!res.ok){
                throw new Error(`Error!`);
            }
            getUsers();
        })
        .catch((err) => {
            setError(err.message);
        });

    }

    const addUser = (user) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then((res) => {
            if(!res.ok){
                throw new Error(`Error! Could not create user!`);
            }
            getUsers();
        })
        .catch((err) => {
            setError(err.message);
        });
    }

    const editUser = (id) => {
        let selectedUser = user.filter((user) => user.id === id);

        setSlctedId(id);

        setSlctedUser({
            username: selectedUser[0].username,
            email: selectedUser[0].email
        });

        setUpdateFlag(true);
    }

    const updateUser = (user) => {
        fetch(url + `${slctedId}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then((res) => {
            if(!res.ok){
                throw new Error(`Failed To Update!`);
            }
            getUsers();
        })
        .catch((err) => {
            setError(err.message);
        })
        .finally(() => {
            setUpdateFlag(false);
        });
    }

    useEffect(() => {
        getUsers();
    }, [getUsers]);


    return (
        <div>
            {updateFlag ? <Form btnText="Update user" selectedUser={slctedUser} handleSubmitUser={updateUser} />
            : <Form btnText="Add user" handleSubmitUser={addUser} />}
            
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {user && user.map((data) => {
                return (
                    <div key={data.id}>
                        <p>
                            <strong>Username: </strong>
                            <span>{data.username}</span>
                        </p>
                        <p>
                            <strong>Email: </strong>
                            <span>{data.email}</span>
                        </p>
                        <div className="buttons">
                            <button onClick={() => editUser(data.id)} style={{marginRight: '1rem'}}>Update</button>
                            <button onClick={() => deleteUser(data.id)}>Delete</button>
                        </div>
                        <br />
                    </div>
                );
            })}
        </div>
    );
}

export default HandleAPI;
