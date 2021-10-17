import React, { Component } from 'react';

class Try extends Component {
    render() {
        const { tryInfo } = this.props;
        return (
            <li>
                <div>{tryInfo.tryInfo.try}</div>
                <div>{tryInfo.tryInfo.result}</div>
            </li>
        )
    }

}

export default Try;