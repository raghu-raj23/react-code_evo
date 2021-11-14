import React, { useEffect, useRef } from 'react'

function L18_RefFocusInput() {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    return (
        <div>
            <input ref = {inputRef} type = 'text'></input>
        </div>
    )
}

export default L18_RefFocusInput
