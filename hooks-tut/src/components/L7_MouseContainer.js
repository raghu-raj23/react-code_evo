import React, { useState, useEffect } from 'react'
import L6_HookMouse from './L6_HookMouse'

function L7_MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick = {(() => setDisplay(!display))} >Toggle Display</button>
            {display && <L6_HookMouse/>}
        </div>
    )
}

export default L7_MouseContainer
