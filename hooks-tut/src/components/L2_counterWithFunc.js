import React, { useState } from 'react'

function L2_counterTwo() {
    const [count, setCount] = useState(0)
    const reset = () => setCount(0)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount( prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            Count { count }
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment 1</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement 1</button>
            <button onClick={incrementFive}>Increment 5</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default L2_counterTwo