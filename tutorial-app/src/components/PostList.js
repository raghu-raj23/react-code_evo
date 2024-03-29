import React, { Component } from 'react'
import axios from "axios";

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                posts:[],
                errorMsg: null
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/osts")
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: "error retrieving data"})
        })
    }
    
    render() {
        const {posts, errorMsg } = this.state
        return (
            <div>
                List of posts:
                {
                    posts.length ? posts.map(post => <div key={post.id}> {post.title} </div>) : "Loading..."
                }
                {errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        )
    }
}

export default PostList
