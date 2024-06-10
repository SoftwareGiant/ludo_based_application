import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch all referral data
export const fetchAllReferrals = createAsyncThunk(
    'referrals/fetchAllReferrals',

    async () => {
        const accessToken = localStorage.getItem('accessToken');
        try {
            const response = await axios.get('/api/user/allreferral', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            console.log(response);
            return response.data.alluser;
        } catch (error) {

            toast.error('Error fetching referral list:', error);
            throw error;
        }
    }
);

const referralsSlice = createSlice({
    name: 'referrals',
    initialState: {
        allReferrals: [],
        status: 'idle', // idle | loading | succeeded | failed
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllReferrals.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllReferrals.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.allReferrals = action.payload; // Set the "alluser" array to the state
            })
            .addCase(fetchAllReferrals.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default referralsSlice.reducer;
