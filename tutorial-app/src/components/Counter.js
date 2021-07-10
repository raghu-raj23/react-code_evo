import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increase(){
        // this.setState({
        //     count: this.state.count + 1
        // },() => {console.log("-->", this.state.count)})
        //this will result in async call of setState
        
        //but here it will bee based on previous state
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }
    infive(){
        this.increase()
        this.increase()
        this.increase()
        this.increase()
        this.increase()
    }

    render() {
        return (
            <div>
                <div>count - {this.state.count} </div>
                <button onClick={() => this.infive()}>Increase</button>
            </div>
        )
    }
}

export default Counter
