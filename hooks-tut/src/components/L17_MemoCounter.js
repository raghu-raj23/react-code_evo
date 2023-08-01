import React, { useState, useMemo } from 'react'

function L17_MemoCounter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = ()=> {
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = ()=> {
        setCounterTwo(counterTwo + 1)
    }
    const isEven = useMemo(()=> {
            let i =0
            while(i < 200000000) i++
            return counterOne % 2 === 0
        }, [counterOne])

    return (
        <div>
            <div>
                <button onClick = {incrementOne}> Count One - { counterOne }</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick = {incrementTwo}> Count Two - { counterTwo }</button>
            </div>
        </div>
    )
}

export default L17_MemoCounter
// The useMemo() hook is used to memoize expensive computations, it caches the result of the computation and only re-runs it when the dependencies change.

//  useCallback vs useMemo:
// useCallback caches the whole function but useMemo caches only the result of the function.