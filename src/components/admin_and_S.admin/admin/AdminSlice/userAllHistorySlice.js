import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserAllHistory = createAsyncThunk(
  'userAllHistory/fetchUserAllHistory',
  async (userId) => {
    const accessToken = localStorage.getItem('accessToken');
    const response = await axios.get(`/api/userhistory/alltypehistory/${userId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response.data)
    return response.data;
  }
);

const userAllHistorySlice = createSlice({
  name: 'userAllHistory',
  initialState: {
    loading: false,
    gameDetails: [],
    paymentDetails: [],
    supportDetails: "",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserAllHistory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserAllHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.gameDetails = action.payload.gameDetails;
        state.paymentDetails = action.payload.paymentDetails;
        state.supportDetails = action.payload.supportHistory;
        return;
      })
      .addCase(fetchUserAllHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },

});

export default userAllHistorySlice.reducer;
