// userHistorySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
    paymentHistory: [],
    loading: false,
    error: null,
};

// Define the async thunk for fetching user payment history
export const fetchUserPaymentHistory = createAsyncThunk(
    'userhistory/fetchUserPaymentHistory',
    async () => {
        const accessToken = localStorage.getItem('accessToken');
        console.log(accessToken)
        if (!accessToken) {
            throw new Error('Token not found');
        }
        const response = await axios.get('api/userhistory/userpaymenthistory', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
          });
         return response.data.paymentDetails;
    }
);

// Create the user history slice
const userHistorySlice = createSlice({
    name: 'userhistory',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserPaymentHistory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserPaymentHistory.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.paymentHistory = action.payload;
            })
            .addCase(fetchUserPaymentHistory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

// Export the reducer and actions
export default userHistorySlice.reducer;
