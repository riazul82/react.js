import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Child = (props) => {
    const [user, setUser] = useState({id: 100, name: 'abc', age: 1002});

    const handleClick = () => {
        setUser({id: props.userId, name: props.userName, age: props.userAge});
        props.userData(user);
    }

    return (
        <div style={{marginTop: '2rem'}}>
            <button onClick={handleClick}>Click Me!</button>
        </div>
    );
}

Child.propTypes = {
    userId: PropTypes.number,
    userName: PropTypes.string,
    userAge: PropTypes.number
}

// for object >>>
// Child.propTypes = {
//     user: PropTypes.shape({
//         id: PropTypes.number,
//         name: PropTypes.string,
//         age: PropTypes.number
//     })
// }

Child.defaultProps = {
    userId: 1,
    userName: '<user-name>',
    userAge: 0
}

export default Child;