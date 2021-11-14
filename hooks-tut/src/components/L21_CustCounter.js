import React, { useState } from 'react'
import useCounter from '../hooks/useCounter'

function L21_CustCounter() {
    const [count, increment, decrement, incrementFive, reset] = useCounter(10, 10)
    return (
        <div>
            Count { count }
            <button onClick={increment}>Increment 1</button>
            <button onClick={decrement}>Decrement 1</button>
            <button onClick={incrementFive}>Increment 5</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default L21_CustCounter
