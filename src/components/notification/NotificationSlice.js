// NotificationSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    notifications: [],
    status: 'idle',
    error: null,
};

export const fetchNotifications = createAsyncThunk(
    'notifications/fetchNotifications',
    async () => {
        const accessToken = localStorage.getItem('accessToken');
        try {
            const response = await axios.get('/api/notification/all', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            console.log(response,"inside notification");
            return response.data.allnotification;
        } catch (error) {
            if (error.response.data.message === "Notification not found") {
                return [];
            }
            toast.error('Error fetching all users:', error);
            throw error;
        }
    }
);


const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        // Handle thunk actions using a builder callback
        builder
            .addCase(fetchNotifications.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchNotifications.fulfilled, (state, action) => {
                console.log(action.payload)
                state.status = 'succeeded';
                state.notifications = action.payload;
            })
            .addCase(fetchNotifications.rejected, (state, action) => {
                console.log(action.payload)
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default notificationSlice.reducer;
