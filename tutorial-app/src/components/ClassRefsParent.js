import React, { Component } from 'react'
import ClassRefs from './ClassRefs'

class ClassRefsParent extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef()
    }
    
    clickHandler = () => {
        this.componentRef.current.focusInput()
    }

    render() {
        return (
            <div>
                <ClassRefs ref={this.componentRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default ClassRefsParent
