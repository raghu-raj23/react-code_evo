import React, { Component } from 'react'

class UserGreet extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }   

    render() {
        // if(this.state.isLoggedIn){
        //     return <div>Wecome Raj</div>
        // }
        // else{
        //     return <div>Wecome Guest</div>
        // }

        // let message
        // if (this.state.isLoggedIn){
        //     message = <div>Welcome Raj</div>
        // }
        // else{
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        return(
            this.state.isLoggedIn ?
            <div>Wecome Raj</div>
            : <div>Welcome Guest</div>
            )

            //short circuit method
            // return this.state.isLoggedIn && <div>Welcome Raj</div>
            //if the first condition doesnt satisfy nothing renders
    }
}

export default UserGreet
