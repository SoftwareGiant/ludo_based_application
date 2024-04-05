import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
  match: null,
  loading: 'idle',
  error: null,
};

export const matchUser = createAsyncThunk(
  'match/matchUser',
  async ({ data, setIsRequest, closematchDrawerBottom }) => {
    console.log(data)
    const accessToken = localStorage.getItem('accessToken');
    try {
      const response = await axios.post('/api/game/matchuser', data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response)
      if (response.status === 200) {
        console.log(response)
        setIsRequest(true);
        return response.data;
      }
      else {
        toast.error("Failed");
        setIsRequest("failed");
        closematchDrawerBottom();
        return null;
      }
    } catch (error) {
      toast.error(error)
      throw new Error('Failed to match user');
    }
  }
);

const matchSlice = createSlice({
  name: 'match',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(matchUser.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
        return state;
      })
      .addCase(matchUser.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.match = action.payload;
        return state;
      })
      .addCase(matchUser.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message || 'Failed to match user';
        return state;
      });
  },
});

export default matchSlice.reducer;
