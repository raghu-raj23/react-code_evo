import React, { useState, useEffect } from 'react'
import axios from 'axios'


function L9_DataFetchingAxios() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButton, setIdFromButton] = useState(1)

    const handleClick = () => {
        setIdFromButton(id)
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(error => error.message)
    }, [idFromButton])
    return (
        <div>
            <input type = "text" value = {id} onChange = {e => setId(e.target.value)} />
            <button type = "button" onClick = {handleClick}> Fetch Post </button>
            <div>{post.title}</div>
            {/* <ul>
                {posts.map(post => <li key = {post.id}>{post.title}</li>)}
            </ul> */}
        </div>
    )
}

export default L9_DataFetchingAxios
