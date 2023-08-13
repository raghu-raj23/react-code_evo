import { createSlice } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice'


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
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIceCreams--
        })
    }
});

export default iceCreamSlice.reducer
export const { ordered, restocked } = iceCreamSlice.actions