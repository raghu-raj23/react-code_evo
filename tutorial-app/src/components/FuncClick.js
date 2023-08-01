import React from 'react'

function FuncClick() {
    function clickHandler(){
        alert("yahoo")
    }
    return (
        <div>
            <button onClick = {clickHandler}>click</button>
        </div>
    )
}

export default FuncClick
