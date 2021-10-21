import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
        // approach 2
        this.cbRef = null;
        this.setCbRef = (element) => {
            this.cbRef = element;
        }
    }

    componentDidMount() {
        this.inputRef.current.focus();
        console.log(this.inputRef);
        // Approach 2 older
        if (this.cbRef){
            this.cbRef.focus();
        }
    }
    clickHandler = () => {
        alert(this.inputRef.current.value);
    }
    
    render() {
        return (
            <div>
                <input type = 'text' ref = {this.inputRef}/>
                <input type = 'text' ref = {this.setCbRef}/>
                <button onClick = {this.clickHandler} >Click</button>
            </div>
        )
    }
}

export default RefsDemo
// One of the use cases of refs are to focus on an element like in this case in the text, something which is used in login forms, etc.
// Another use case is to fetch the input value