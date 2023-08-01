import React, { useState } from 'react'

function L1_counter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick = {() => setCount(count + 1)}> Count {count} </button>
        </div>
    )
}

export default L1_counter
