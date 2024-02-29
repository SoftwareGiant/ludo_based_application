import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import io from "socket.io-client";
const socket = io("http://localhost:8003");
const initialState = {
    battles: [],
    loading: 'idle', // Add loading state for async operations
    error: null,
};

export const fetchAllBattles = createAsyncThunk(
    'battles/fetchAll',
    async () => {
        return new Promise((resolve) => {
            socket.on("databaseChange", (data) => {
                console.log("inside database changes");
                resolve(data);
            });
            socket.emit("allNewGame");
            socket.on("allNewGame", (data) => {
                resolve(data);
            });
        });
    }
);

const battlesSlice = createSlice({
    name: 'battles',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllBattles.pending, (state) => {
                state.loading = 'pending';
                state.error = null;
            })
            .addCase(fetchAllBattles.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.battles = action.payload;
            })
            .addCase(fetchAllBattles.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.error.message || 'Failed to fetch battles';
            });
    },
});

export default battlesSlice.reducer;
