import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>
                Number of Cakes - {props.numOfCakes}
            </h2>
            <button onClick = {props.buyCake}>
                Buy Cake
            </button>
        </div>
    )
}


// this is a selector, in larger applications this would be added in a separate file
const mapStateToProps = (state) => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDipatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}



export default connect(mapStateToProps,mapDipatchToProps)(CakeContainer)
