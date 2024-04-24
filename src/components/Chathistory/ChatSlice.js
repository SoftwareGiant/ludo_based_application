import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    allChatList: [],
    loading: false,
    error: null,
  };


export const fetchAllChatList = createAsyncThunk(
  'chat/fetchAllChatList',
  async () => {
   
    const accessToken = localStorage.getItem('accessToken');
    console.log(accessToken)
    if (!accessToken) {
        throw new Error('Token not found');
    } 
    const response = await axios.get('/api/message/allChat', {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    // console.log(response)
   
    return response.data;
  }
);

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllChatList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllChatList.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.allChatList = action.payload.allChatList;
      })
      .addCase(fetchAllChatList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default chatSlice.reducer;
