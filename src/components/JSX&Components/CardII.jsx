import React, { Component } from 'react';

export default class CardII extends Component {
    render() {
        return (
            <div>
                <h1>Name: {this.props.name}</h1>
                <p><strong>Age: </strong>{this.props.age}</p>
                <p><strong>Hobby: </strong>{this.props.hobby}</p>
            </div>
        );
    }
}