import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

type User = {
    id: number
    name: string
}

type InitialState = {
    loading: boolean
    users: User[]
    error: string
}

const initialState: InitialState = {
    loading: false,
    users: [],
    error: ''
}

// createAsyncThunk Generates pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data)
    // .catch(console.log('Something went wrong!'))
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true
            state.users = []
            state.error = ''
        })
        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message || 'Something went wrong!!'
        })
    },
})

export default userSlice.reducer