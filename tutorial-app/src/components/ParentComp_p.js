import React, { Component, PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp_p extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Raghu'
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Raghu'
            })
        }, 2000)
    }
    
    render() {
        console.log("parent")
        return (
            <div>
                Parent Component Pure
                <RegComp name = {this.state.name}></RegComp>
                <PureComp name = {this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp_p
