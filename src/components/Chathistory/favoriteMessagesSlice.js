import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFavoriteMessages = createAsyncThunk(
  'favoriteMessages/fetchFavoriteMessages',

  async () => {
    const accessToken = localStorage.getItem('accessToken');
    console.log(accessToken)
    if (!accessToken) {
        throw new Error('Token not found');
    } 
    const response = await axios.get('api/message/listoffavourite',
 {   headers: {
        Authorization: `Bearer ${accessToken}`,
    },}
);
    return response.data;
  }
);

const favoriteMessagesSlice = createSlice({
    name: 'favoriteMessages',
    initialState: {
      favoriteMessages: [],
      loading: false,
    error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchFavoriteMessages.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchFavoriteMessages.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
          state.favoriteMessages = action.payload;// Slice the response to get only the first 5 items
        })
        .addCase(fetchFavoriteMessages.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
  });
  

export default favoriteMessagesSlice.reducer;
