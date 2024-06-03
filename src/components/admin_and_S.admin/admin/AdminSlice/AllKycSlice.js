import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const fetchAllKyc = createAsyncThunk(
    'allKyc/fetchKyc',
    async ({ uid, status }) => {
        const accessToken = localStorage.getItem('accessToken');
        console.log(uid, status)
        if (!accessToken) {
            throw new Error('Access token not found');
        }
        try {
            const response = await axios.post('api/user/verifyKyc', {
                "userId": uid,
                "status": status
            }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            console.log(response.data);
            if (response?.data?.message === "KYC verified")
                toast.success(response.data.message)
            if (response?.data?.message === "KYC rejected")
                toast.error(response.data.message)

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
