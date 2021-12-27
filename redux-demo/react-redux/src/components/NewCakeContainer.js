import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
    const [numOfCakes, setNumOfCakes] = useState(0)
    return (
        <div>
            <h2>
                Number of Cakes - {props.numOfCakes}
            </h2>
            <input type = 'text' value = {numOfCakes} onChange = {(e) => setNumOfCakes(e.target.value)} />
            <button onClick = {() => props.buyCake(numOfCakes)}>
                Buy {numOfCakes} Cakes
            </button>
        </div>
    )
}


// this is a selector, in larger applications this would be added in a separate file
const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDipatchToProps = (dispatch) => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}



export default connect(mapStateToProps,mapDipatchToProps)(CakeContainer)
