import React, { useState, useRef, useEffect } from 'react'

function L19_RefHookTimer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer +1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])
    return (
        <div>
            Hook timer - { timer }
            <button onClick = {() => clearInterval(intervalRef.current)}> Clear Timer </button>
        </div>
    )
}

export default L19_RefHookTimer

// useRef hook creates a generic reference that can be used to store a value that you want to persist. This doesn't cause re-renders when the data changes and remembers data even when other state variables cause the re-render of this component

// useImperativeHandle(), useLayoutEffect() and useDebugValue() are used to add custom hooks to components.