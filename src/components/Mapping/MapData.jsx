import React from 'react';
import Data from '../../test.json';
import Card from './Card';

const MapData = () => {
    return (
        <div>
            {Data.map((item, index) => {
                return (
                    <div key={index}>
                        <Card name={item.name} price={item.price} discount={item.discount} rating={item.rating} />
                        <br />
                    </div>
                );
            })}
        </div>
    );
}

export default MapData;