import React from 'react'

function ChildComp(props) {
    return (
        <div>
            <button onClick = {() => props.greetHandler('child')}>Greet parent</button>
        </div>
    )
}

export default ChildComp
