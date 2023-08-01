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
    // mounting lifecycle methods

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA get derived state from props')
        return null
    }
    // this method is rarely used and is used only when the state of the component changes in props over time. 
    // Its called every time a component re-renders. Return an object representing the new state of the component
    
    componentDidMount(){
        console.log("LifecycleA component did mount")
    }
    //this is invoked immediately after the component has mounted
    // perform ajax request, etc
    
    // Update LifeCycle Methods

    /* static getDerivedStateFromProps(props, state){
        console.log('LifecycleA get derived state from props')
        return null
    }
    // this method is rarely used and is used only when the state of the component changes in props over time. 
    // Its called every time a component re-renders. Return an object representing the new state of the component */

    shouldComponentUpdate(){
        console.log("Lifecycle A shouldComponent Update")
        return true
    }
    // this method takes in updated props and states and checks if the component should re-render or not. By default its true, but can be used to change this behaviour

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Lifecycle A get Snapshot')
        return null
    }
    // Accepts prev state and props, its called  before changes from virtual DOM has to be reflected in the DOM. Capture information from DOM like user scroll position
    

    componentDidUpdate(){
        console.log("Lifecycle A componentDidupdate")
    }
    // Called after render is finished in the re-render cycles.
    // Accepts prev props, state and snapshot from getSnapshotBeforeUpdate
    //Called only once in each re-render cycle. Can make AJAX calls here

    changeState = () => {
        this.setState ({
            name:'Raj'
        })
    }
    
    render() {
        console.log("LifecycleA render")
        return (
            <div>
                <div> LifeCycle a </div>
                <button onClick = {this.changeState}>Change State</button>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA

// Unmounting Phase methods:

// 1. componentWillUnmount()
// Invoked right before a component is unmounted and destroyed.
// Can perform clean-up tasks like cancelling network requests, removing event handlers, cancelling subscriptions and invalidating timers

// Error Handling Phase methods:
// 1. static getDerivedStateFromError(error)
// 2.componentDidCatch(error,info)

// Both are called either during CanvasRenderingContext2D, in a LifeCycle method or in the constructor of any child component