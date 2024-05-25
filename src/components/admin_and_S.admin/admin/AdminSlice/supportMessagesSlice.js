// src/features/supportMessages/supportMessagesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching support messages
export const fetchSupportMessages = createAsyncThunk(
    'supportMessages/fetchSupportMessages',
    async (userId) => {
        const accessToken = localStorage.getItem('accessToken');
        const response = await axios.post('/api/support/admin/supportmessage', { userId }, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        console.log(response.data);
        return response.data.ticket;
    }
);


const supportMessagesSlice = createSlice({
    name: 'supportMessages',
    initialState: {
        ticket: {
            _id: '',
            createdBy: '',
            lastUpdated: '',
            messages: [],
            status: '',
        },
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSupportMessages.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSupportMessages.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.ticket = action.payload;
            })
            .addCase(fetchSupportMessages.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default supportMessagesSlice.reducer;
