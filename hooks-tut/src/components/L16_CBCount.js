import React from 'react'

function L16_CBCount({text, count}) {
    console.log(`Rendering ${text}`)
    return (
        <div>
            {text} - {count}
        </div>
    )
}

export default React.memo(L16_CBCount)
