import React from 'react';

const Card = (props) => {
    const {name, price, discount, rating} = props;

    return (
        <div>
            <p><strong>Name: </strong><span>{name}</span></p>
            <p><strong>Price: </strong><span>{price}</span></p>
            <p><strong>Discount: </strong><span>{discount}</span></p>
            <p><strong>Rating: </strong><span>{rating}</span></p>
        </div>
    );
}

export default Card;