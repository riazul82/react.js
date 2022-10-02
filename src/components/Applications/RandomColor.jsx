import React, { useState } from 'react';

const RandomColor = () => {
    const [color, setColor] = useState({color: 'black'});

    const handleColor = () => {
        let randVal = Math.floor(Math.random() * 11);

        switch(randVal){
            case 0:
                setColor({color: 'red'});
                break;

            case 1:
                setColor({color: 'green'});
                break;

            case 2:
                setColor({color: 'blue'});
                break;

            case 3:
                setColor({color: 'orange'});
                break;

            case 4:
                setColor({color: 'chocolate'});
                break;

            case 5:
                setColor({color: 'skyblue'});
                break;

            case 6:
                setColor({color: 'steelblue'});
                break;

            case 7:
                setColor({color: 'pink'});
                break;
            
            case 8:
                setColor({color: 'plum'});
                break;

            case 9:
                setColor({color: 'olive'});
                break;
            
            case 10:
                setColor({color: 'orangered'});
                break;

            default:
                setColor({color: 'black'});
        }
    }

    return (
        <div style={{margin: '2rem 0 0 2rem'}}>
            <h1 style={color}>I am {color.color} color</h1>
            <button onClick={handleColor}>Change color</button>
        </div>
    );
}

export default RandomColor;