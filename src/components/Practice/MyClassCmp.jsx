import React from 'react';

export default class MyClassCmp extends React.Component{
    render() {
        const elem = React.createElement('p', {id: 'text'}, 'This is a Class Component');

        return (
            <div>
                <h1>Hello World!</h1>
                {elem}
            </div>
        );
    }
}