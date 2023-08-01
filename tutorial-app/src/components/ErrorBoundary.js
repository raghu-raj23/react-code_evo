import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            hasError: false,
        }
    }
    
    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info){
        console.log(error)
        console.log(info)
    }
    // this is used to for logging the errors

    render() {
        if(this.state.hasError){
            return <h1>Something went wrong</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary
