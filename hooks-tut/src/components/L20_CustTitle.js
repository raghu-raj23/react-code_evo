import React, { useState } from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'


// Refer L5_CounterWithEffect.js for the usage of useEffect hook

function L20_CustTitle() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useDocumentTitle(count) // this is a custom hook

    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)} />
            <button onClick = {() => setCount(prevCount => prevCount + 1)}>
                Clicked {count} times
                </button>
        </div>
    )
}

export default L20_CustTitle
