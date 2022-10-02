import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TestClass extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <h1>This is a Class Component!</h1>
            </div>
        );
    }
}