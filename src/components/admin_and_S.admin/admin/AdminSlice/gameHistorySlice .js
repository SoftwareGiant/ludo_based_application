// gameHistorySlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllGameHistory = createAsyncThunk(
  'gameHistory/fetchAllGameHistory',
  async () => {
    const accessToken = localStorage.getItem('accessToken');
    try {
      const response = await axios.get('api/game/allgamehistory', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data.allGame;
    } catch (error) {
      console.error('Error fetching all game history:', error);
      throw error;
    }
  }
);

const gameHistorySlice = createSlice({
  name: 'gameHistory',
  initialState: {
    gameHistory: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllGameHistory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllGameHistory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.gameHistory = action.payload;
      })
      .addCase(fetchAllGameHistory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllGameHistory = (state) => state.gameHistory.gameHistory;
export const selectAllGameHistoryStatus = (state) => state.gameHistory.status;

export default gameHistorySlice.reducer;
