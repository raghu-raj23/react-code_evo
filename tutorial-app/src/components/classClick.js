import React, { Component } from 'react'

class classClick extends Component {
    clickHandler(){
        console.log('yippeee')
    }
    render() {
        return (
            <div>
                <button onClick = {this.clickHandler}>class click</button>
            </div>
        )
    }
}

export default classClick
