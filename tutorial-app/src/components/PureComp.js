import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        console.log("pure")
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp
// pure component takes a shallow comparission for props and state and then renders. And if there is a change only then does it change and re render. It prevents unnecesarry re renders. Return a new array or simmilar object if required to mutate