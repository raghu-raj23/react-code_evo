import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_SUCCESSFUL':
            return {
                ...state, 
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                post: {},
                error: 'Something weent wrong'
            }
        default:
            return state
    }
}

function L15_RedDatFetching2() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                dispatch({type: 'FETCH_SUCCESSFUL', payload: res.data})
            })
            .catch(err => {
                dispatch({type: 'FETCH_ERROR'})
            })
    }, [])


    return (
        <div>
            {state.loading ? 'Loading...' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default L15_RedDatFetching2
