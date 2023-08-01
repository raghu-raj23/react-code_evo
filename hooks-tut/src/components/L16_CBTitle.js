import React from 'react'

function L16_CBTitle() {
    console.log('Rendering Title');
    return (
        <div>
            <h1>useCallback Hook</h1>
        </div>
    )
}

export default React.memo(L16_CBTitle)
