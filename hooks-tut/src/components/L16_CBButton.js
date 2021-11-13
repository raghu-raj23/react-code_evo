import React from 'react'

function L16_CBButton({handleClick, children}) {
    console.log(`Rendering ${children}`)
    return (
        <button onClick = {handleClick}>{children}</button>
    )
}

export default React.memo(L16_CBButton)
