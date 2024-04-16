import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    user: null,
};

export const sendMessage = createAsyncThunk(
    'user/message',
    async (_,{ rejectWithValue }) => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            if (!accessToken) {
                throw new Error('Token not found');
            }
            const response = await axios.post('/api/message/sendmessage', {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              });
            // console.log(response.data)
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
                // Handle pending state if needed
                state.user = null; // Reset user state
            })
            .addCase(fetchUserDetail.fulfilled, (state, action) => {
                // Handle fulfilled state
                state.user = action.payload;
            })
            .addCase(fetchUserDetail.rejected, (state, action) => {
                // Handle rejected state
                state.user = null; // Reset user state
            });

    },
});


export const selectUser = (state) => state.user.user;

export default userSlice.reducer;