import React from 'react';

const Card = (props) => {
    const {name, age, gender, gpa} = props;
    return (
        <div className="card">
            <h3>Name: {name}</h3>
            <h3>Age: {age}</h3>
            <h3>Gender: {gender}</h3>
            <h3>GPA: {gpa}</h3>
        </div>
    )
}

export default Card;