import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Raghu'
        }
        console.log('Lifecycle B constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleB get derived state from props')
        return null
    }
 
    componentDidMount(){
        console.log("LifeCycleB component did mount")
    }
    
    render() {
        console.log("LifeCycleB render")
        return (
            <div>
                LifeCycle B
            </div>
        )
    }
}

export default LifeCycleB
