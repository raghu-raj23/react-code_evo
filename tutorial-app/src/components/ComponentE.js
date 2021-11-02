import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

export class ComponentE extends Component {
    static contextType = UserContext
    render() {
        return (
            <>
            Component E context {this.context}
            <ComponentF />
            </>
        )
    }
}

// ComponentE.contextType = UserContext
export default ComponentE

/* 
This is limited to only class components 
And only one context can be used for contextType
*/