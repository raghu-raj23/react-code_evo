import React, { useState, useEffect } from 'react'
import axios from 'axios'

function L15_RedDatFetching() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then()
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default L15_RedDatFetching
