import React, { useContext } from 'react'
import { UserContext, ChannelContext } from '../App'

function L10_ContextCompD() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>
            { user } - { channel }
        </div>
    )
}

export default L10_ContextCompD
