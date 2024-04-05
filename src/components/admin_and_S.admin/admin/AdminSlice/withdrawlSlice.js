import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllWithdrawalRequests = createAsyncThunk(
  'allWithdrawalRequests/fetchAllWithdrawalRequests',
  async () => {
    const accessToken = localStorage.getItem('accessToken');
    try {
      const response = await axios.get('api/payment/allwithdrawlrequest', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data.allPendingWithdrawl;
    } catch (error) {
      console.error('Error fetching all withdrawal requests:', error);
      throw error;
    }
  }
);

const allWithdrawalRequestsSlice = createSlice({
  name: 'allWithdrawalRequests',
  initialState: {
    withdrawalRequests: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllWithdrawalRequests.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllWithdrawalRequests.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.withdrawalRequests = action.payload;
      })
      .addCase(fetchAllWithdrawalRequests.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllWithdrawalRequests = (state) => state.allWithdrawalRequests.withdrawalRequests;
export const selectAllWithdrawalRequestsStatus = (state) => state.allWithdrawalRequests.status;

export default allWithdrawalRequestsSlice.reducer;
