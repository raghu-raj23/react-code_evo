import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'red'
}

function Inline() {
    return (
        <div>
            {/* <h1 className = {styles.success}>Success</h1> */}
            <h1 style = {heading}>Inline Styles</h1>
            <h1 className = 'error'>Inline ERROR</h1>
        </div>
    )
}

export default Inline
