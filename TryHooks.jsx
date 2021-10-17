import React, { Component, PureComponent, memo } from 'react';

const Try = memo(({ tryInfo }) => { //memo
    return (
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    )
});

// const Try = ({ tryInfo }) => { //memo
//     return (
//         <li>
//             <div>{tryInfo.try}</div>
//             <div>{tryInfo.result}</div>
//         </li>
//     )
// };

// class Try extends PureComponent {
//     render() {
//         const { tryInfo } = this.props;
//         return (
//             <li>
//                 <div>{tryInfo.tryInfo.try}</div>
//                 <div>{tryInfo.tryInfo.result}</div>
//             </li>
//         )
//     }

// };


// class Try extends Component {
//     render() {
//         const { tryInfo } = this.props;
//         return (
//             <li>
//                 <div>{tryInfo.tryInfo.try}</div>
//                 <div>{tryInfo.tryInfo.result}</div>
//             </li>
//         )
//     }

// };

export default Try;