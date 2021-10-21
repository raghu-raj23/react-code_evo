import React, { Component, PureComponent } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

// class ParentComp_p extends PureComponent { this is used for pure class components
class ParentComp_p extends Component { // Tis is used fofr Memo components
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
        console.log("************Parent Component Pure************")
        return (
            <div>                
                <MemoComp name = {this.state.name} />
                {/* <RegComp name = {this.state.name}></RegComp>
                <PureComp name = {this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentComp_p
