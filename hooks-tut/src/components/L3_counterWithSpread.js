import React, { useState } from 'react'

function L3_counterThree() {
    const [name, setName] = useState({firstName: '', lastName: ''})
    return (
        <div>
            <form>
                <input type="text" value={name.firstName} onChange= {e => setName({ ...name, firstName : e.target.value})}/>
                <input type="text" value={name.lastName} onChange = {e => setName({...name, lastName: e.target.value})}/>
                <h2>Your name is {name.firstName}</h2>
                <h2>Your last name is {name.lastName} </h2>
            </form>

            {/* useState hook will not merge the state, but setState of class component will merge the state */}

        </div>
    )
}

export default L3_counterThree
