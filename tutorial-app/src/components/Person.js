import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2 key = {person}>{person}</h2>
        </div>
    )
}

export default Person