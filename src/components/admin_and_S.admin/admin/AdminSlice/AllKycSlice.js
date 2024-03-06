import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllKyc = createAsyncThunk(
    'allKyc/fetchKyc',
    async ({ uid }) => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            throw new Error('Access token not found');
        }
        try {
            const response = await axios.post('api/user/verifyKyc', {
                "userId": uid
            }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            return response.data.verify;
        } catch (error) {
            console.error('Error fetching all users:', error);
            throw error;
        }
    }
);

const allkycuserSlice = createSlice({
    name: 'allkyc',
    initialState: {
        kycusers: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllKyc.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllKyc.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.kycusers = action.payload;
            })
            .addCase(fetchAllKyc.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const selectKycUsers = (state) => state.allkyc.kycusers;
export const selectAllKycUsersStatus = (state) => state.allkyc.status;

export default allkycuserSlice.reducer;
