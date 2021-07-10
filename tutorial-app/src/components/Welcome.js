import React, { Component } from 'react'

//JSX Version

class Welcome extends Component {
    render() {
        const {name} = this.props;
        // const {state1, state2} = this.state;
        return <h1 className = 'cl'>Hey from {name}</h1>        
    }
}

//without JSX

// const Welcome = (props) => {
//     return React.createElement('div', {id: 'hello', className:'cl'}, React.createElement('h1', null, "hiiiii"))
// }

export default Welcome;