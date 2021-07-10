import React from 'react'

function Columns() {
    const items = []
    return (
        <>
            {
                items.map(item => (
                    <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                        {/* as of now key attribute is the only attribute that can be passed */}
                    </React.Fragment>
                ))
            }
            <td>Name</td>
            <td>Raghuraj</td>
        </>
        // <> when used key atrtribute cant be passed
    )
}

export default Columns
