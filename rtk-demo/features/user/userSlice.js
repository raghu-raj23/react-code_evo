const createSlice = require('@reduxjs/toolkit').createSlice
const createAsynThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')

const initialState = {
    loading: false,
    users: [],
    error: ''
}

// createAsyncThunk Generates pending, fulfilled and rejected action types
const fetchUsers = createAsynThunk('user/fetchUsers', () => {
    return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data.map((user) => user.id))
    // .catch(console.log('Something went wrong!'))
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.payload.message
        })
    },
})

module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers