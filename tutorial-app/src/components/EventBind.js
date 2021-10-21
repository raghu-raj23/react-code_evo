import React, { Component } from 'react'

class EventBind extends Component {


    constructor(props){
        super(props)
        
        this.state = {
        message: 'Hello'
        }
        // official approach
        // this.clickHandler = this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         message: 'clickeddddddd'
    //     })   
    // }
    
    //here this is the 4th approach still an experimental
    clickHandler = () => {
        this.setState({
            message:'clicli'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* 1. this will render the whole component, it will have performance issues
                   <button onClick = {this.clickHandler.bind(this)}>Clickedkdfkfkf</button> */}
                
                {/* 2. this also has performance issues <button onClick = {() => this.clickHandler()}>Clickedkdfkfkf</button> */}

                {/* 3. this is the official binding happens only once*/}
                <button onClick = {this.clickHandler}>Clickedkdfkfkf</button>
                {/* 4. class property as arrow function */}
                {/* <button onClick = {this.clickHandler}>Clickedkdfkfkf</button> */}
            </div>
        )
    }
}

export default EventBind
