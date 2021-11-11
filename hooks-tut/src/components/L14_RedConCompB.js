import React, { useContext } from 'react'
import { CountContext } from '../App'

function L14_RedConCompB() {
    const countContext = useContext(CountContext)
    return (
        <div>
            Component B
            <button onClick = {() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick = {() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick = {() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default L14_RedConCompB
