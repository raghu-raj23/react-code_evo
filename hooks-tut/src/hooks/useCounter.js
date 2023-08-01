import { useState } from 'react'

function useCounter(initialCount = 0, value = 1) {
    const [count, setCount] = useState(initialCount)

    const reset = () => setCount(initialCount)
    const increment = () => setCount(prevCount => prevCount + value)
    const decrement = () => setCount(prevCount => prevCount - value)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount( prevCount => prevCount + value)
        }
    }
    
    return [count, increment, decrement, incrementFive, reset]
}

export default useCounter

// This is a custom hook