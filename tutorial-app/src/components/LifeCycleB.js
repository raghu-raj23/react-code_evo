import React, { Component } from 'react'

// Mounting lifecycle methods

// class LifeCycleB extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              name: 'Raghu'
//         }
//         console.log('Lifecycle B constructor')
//     }

//     static getDerivedStateFromProps(props, state){
//         console.log('LifeCycleB get derived state from props')
//         return null
//     }
 
//     componentDidMount(){
//         console.log("LifeCycleB component did mount")
//     }
    
//     render() {
//         console.log("LifeCycleB render")
//         return (
//             <div>
//                 LifeCycle B
//             </div>
//         )
//     }
// }

// export default LifeCycleB

// Update LifeCycle Methods

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
    // this method is rarely used and is used only when the state of the component changes in props over time. Its called every time a component re-renders
 
    shouldComponentUpdate(){
        console.log("Lifecycle B shouldComponent Update")
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Lifecycle B get Snapshot')
        return null
    }
    componentDidUpdate(){
        console.log("Lifecycle B componentDidupdate")}
    
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
