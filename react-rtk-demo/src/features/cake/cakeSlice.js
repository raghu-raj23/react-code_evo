import { createSlice } from '@reduxjs/toolkit'

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

export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions