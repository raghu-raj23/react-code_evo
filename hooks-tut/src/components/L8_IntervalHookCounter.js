import React, { useState, useEffect } from 'react'

function L8_IntervalHookCounter() {
    const [count, setCount] = useState(0)
    const tick = () => {
        setCount(count + 1)
        // this can be done with out the deppendency of count using prevCount => prevCount + 1
    }
    useEffect(() => {
        const interval = setInterval(tick, 1000)

        return() => {
            clearInterval(interval)
        }
    },[count])

    return (
        <div>
            { count }
        </div>
    )
}

export default L8_IntervalHookCounter
