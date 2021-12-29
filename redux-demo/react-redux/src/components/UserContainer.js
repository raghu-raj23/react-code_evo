import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../redux'

function UserContainer({ userData, fetchUsers }) {
    useEffect(() => {
        fetchUsers()
    }, [])

    return userData.loading ? <div>Loading...</div> : userData.error ? <div>{userData.error}</div> : <div><h1>User Container</h1><div>{userData && userData.users && userData.users.map(user => <p>{user.name}</p>)}</div></div>
}

const mapStateToProps = (state) => {
    return {
        userData: state.user
    }
}

const mapDipatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUser())
    }
}

export default connect(mapStateToProps, mapDipatchToProps)(UserContainer)
