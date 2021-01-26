import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Raghu'
        }
        console.log('Lifecycle A constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA get derived state from props')
        return null
    }
    // this method is rarely used and is used only when the state of the component changes in props over time.
 
    componentDidMount(){
        console.log("LifecycleA component did mount")
    }
    //this is invoked at the last after the component has mounted
    
    render() {
        console.log("LifecycleA render")
        return (
            <div>
                LifeCycle a
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
