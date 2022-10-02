import React from 'react';

const CreateElement = () => {
    return React.createElement(
        'div',
        {id: 'my-div'},
        [
            React.createElement('h1', null, 'Title1'),
            React.createElement('h2', null, 'Title2'),
            React.createElement('h3', null, 'Title3'),
            React.createElement('p', null, 'Plain text1'),
            React.createElement('p', null, 'Plain text2')
        ]
    );
}

export default CreateElement;