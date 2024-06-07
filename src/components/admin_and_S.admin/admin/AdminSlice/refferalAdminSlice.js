// refferalAdminSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
    users: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
};

// Create an async thunk for the API call
export const fetchUserReferralCodes = createAsyncThunk(
    'referusers/fetchUserReferralCodes',
    async (_, { rejectWithValue }) => {

        const accessToken = localStorage.getItem('accessToken');
        try {
            const response = await axios.get('/api/user/alluserReferallCode', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            return response.data.users;
        } catch (error) {
            // Return a rejected action with the error message
            return rejectWithValue(error.response.data);
        }
    }
);

// Create the slice
const referuserSlice = createSlice({
    name: 'referusers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserReferralCodes.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUserReferralCodes.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(fetchUserReferralCodes.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});




export const refferaluserlist = (state) => state.referusers;

// Export the reducer to be included in the store
export default referuserSlice.reducer;
