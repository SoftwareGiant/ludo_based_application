import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    user: null,
    loading:false
};

export const fetchUserDetail = createAsyncThunk(
    'user/detail',
    async (_,{ rejectWithValue }) => {
        // console.log('Fetching user detail')
        try {
            const accessToken = localStorage.getItem('accessToken');
            if (!accessToken) {
                throw new Error('Token not found');
            }
            const response = await axios.get('/api/user/currentuser', {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              });
          
            if (!response.data) {
                throw new Error('userdata fetched failed');
            }
            return response.data.user;
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserDetail.pending, (state, action) => {
                state.loading = true;
                state.user = null; // Reset user state
            })
            .addCase(fetchUserDetail.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(fetchUserDetail.rejected, (state, action) => {
                state.loading = false;
                state.user = null; // Reset user state
            });

    },
});


export default userSlice.reducer;