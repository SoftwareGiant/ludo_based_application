// gamehistorySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// Define the initial state
const initialState = {
    gameHistory: [],
    loading: false,
    error: null,
};

// Define the async thunk for fetching user payment history
export const fetchUsergameHistory = createAsyncThunk(
    'gamehistory/fetchUsergameHistory',
    async () => {
        const accessToken = localStorage.getItem('accessToken');
        console.log(accessToken)
        if (!accessToken) {
            throw new Error('Token not found');
        }
        const response = await axios.get('api/userhistory/usergamehistory', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data.gameDetails;
    }
);

// Create the user history slice
const gamehistorySlice = createSlice({
    name: 'gamehistory',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsergameHistory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsergameHistory.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.gameHistory = action.payload;
            })
            .addCase(fetchUsergameHistory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

// Export the reducer and actions
export default gamehistorySlice.reducer;