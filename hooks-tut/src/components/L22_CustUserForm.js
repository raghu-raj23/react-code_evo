import React from 'react'
import useInput from '../hooks/useInput'

function L22_CustUserForm() {
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }


    return (
        <div>
            <form onSubmit = {submitHandler}>
                <div>
                    <label>First Name</label>
                    <input type = 'text' 
                    // value = {firstName} onChange = {e => setFirstName(e.target.value)}
                    {...bindFirstName}
                    ></input>
                    <label>Last Name</label>
                    <input type = 'text'
                    // value = {lastName} onChange = {e => setLastName(e.target.value)}
                    {...bindLastName}
                    ></input>
                </div>
                <button type = 'submit'>Submit</button>
            </form>
        </div>
    )
}

export default L22_CustUserForm
