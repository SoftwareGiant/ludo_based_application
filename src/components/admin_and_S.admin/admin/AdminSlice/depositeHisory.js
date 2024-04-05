import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllDepositRequests = createAsyncThunk(
  'allDepositRequests/fetchAllDepositRequests',
  async () => {
    const accessToken = localStorage.getItem('accessToken');
    try {
      const response = await axios.get('api/payment/alldepositrequest', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data.allPendingPayment;
    } catch (error) {
      console.error('Error fetching all deposit requests:', error);
      throw error;
    }
  }
);

const allDepositRequestsSlice = createSlice({
  name: 'allDepositRequests',
  initialState: {
    depositRequests: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllDepositRequests.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllDepositRequests.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.depositRequests = action.payload;
      })
      .addCase(fetchAllDepositRequests.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllDepositRequests = (state) => state.allDepositRequests.depositRequests;
export const selectAllDepositRequestsStatus = (state) => state.allDepositRequests.status;

export default allDepositRequestsSlice.reducer;