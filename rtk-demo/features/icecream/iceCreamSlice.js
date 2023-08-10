const { cakeActions } = require('../cake/cakeSlice');

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfIceCreams: 10
}

const iceCreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCreams--;
        },
        restocked: (state, action) => {
            state.numOfIceCreams += action.payload
        },
    },
    
    //  To make the reducer respond to another reducers action creator then user extraReducers.
    // <Name of createSlice>/<action creator> is the reducer name
    // Eventhough this approach works its recomended to use a build function.
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numOfIceCreams--
    //     }
    // },

    // This is the recomended way to use extra reducers
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state) => {
            state.numOfIceCreams--
        })
    }
});

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions