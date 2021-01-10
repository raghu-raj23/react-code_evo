import React, { Component } from 'react'

//JSX Version

class Message extends Component {

    constructor(){
        super();
        this.state = {
            message: 'Yahalo'
        }
    }
    changeMessage() {
        this.setState({
            message: 'Arigato'
        })
    }

    render(){
        return (
        <div>
            <h1 >{this.state.message}</h1>
            <button onClick = {() => this.changeMessage()}> Subs</button>
        </div>
        )        
    }
}

export default Message;