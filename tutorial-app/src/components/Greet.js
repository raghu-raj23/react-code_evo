import React from 'react'

const Greet = (props) => {
    const {name} = props;
    return (
    <div>
        <h1>Hello {name}</h1>
        {props.children}
    </div>
    )
}

export default Greet