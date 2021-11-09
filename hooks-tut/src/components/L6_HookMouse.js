import React, { useState, useEffect } from 'react'

function L6_HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const handleMouseMove = (event) => {
        console.log("mouse event")
        setX(event.clientX)
        setY(event.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', handleMouseMove)

        return() => {
            console.log("useEffectCalled");
            window.removeEventListener('mousemove', handleMouseMove);
            // this is called when the component is unmounted
        }

    },[]); // empty array means that useEffect will only be called once as there is no depency for it
    // this mimics the functionality of componentDidMount and hence the event is only called once

    return (
        <div>
            Mouse Position: X - {x}, Y - {y}
        </div>
    )
}

export default L6_HookMouse
