// slices/withdrawalsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';


export const fetchWithdrawals = createAsyncThunk(
    'withdrawals/fetchWithdrawals',
    async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await axios.get('/api/superadmin/allwithdrawltocheck',
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
            console.log(response);
            return response.data.allPending;
        } catch (error) {
            // Handle error
            toast.error('Error fetching withdrawals:', error);
            throw error; // Rethrow the error to be handled by the component
        }
    }
);

const withdrawalsSlice = createSlice({
    name: 'withdrawals',
    initialState: {
        withdrawals: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWithdrawals.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchWithdrawals.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.withdrawals = action.payload;
            })
            .addCase(fetchWithdrawals.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default withdrawalsSlice.reducer;
