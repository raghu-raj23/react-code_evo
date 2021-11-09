import React, { useState, useEffect } from 'react'

function L5_CounterWithEffect() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('updating document title')

        document.title = `You clicked ${count} times`
    }, [count]) // only re-run the effect if count changes, its an array

    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)} />
            <button onClick = {() => setCount(prevCount => prevCount + 1)}>
                Clicked {count} times
                </button>
        </div>
    )
}

export default L5_CounterWithEffect

// The useEffect hook is used to run a piece of code based on a specific condition.
// It performs the functionality of componentDidMount and componentDidUpdate and componentWillUnmount in a single hook.