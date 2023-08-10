const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState, // short had to use if key and value is same.
    reducers: {
        // Slice will generate action creators with the same name as reducer functions
        ordered: (state) => {
            state.numOfCakes--;
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        },
    },
})

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions