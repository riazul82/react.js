import React from 'react';

const Welcome = (props) => {
    return React.createElement('h1', {id: 'hello'}, `${props.text} Meaw!`);
}

const Test = () => {
    return (
        <div>
            <Welcome text={`WelCome`} />
        </div>
    )
}

export default Test;