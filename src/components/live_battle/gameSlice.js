import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
    gameCodeUpdateStatus: 'idle',
    gameDetail: null,
    error: null,
};

export const updateGameCode = createAsyncThunk(
    'game/updategamecode',
    async (gameCode) => {
        const obj = { "gameCode": gameCode }
        const accessToken = localStorage.getItem('accessToken');
        try {
            const response = await axios.post('/api/game/updategamecode', obj, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            console.log(response, "responsee")
            if (response.status === 200) {
                return response.data.gameDetail;
            }
            else {
                return null;
            }
        } catch (error) {
            toast.error(error.response.data.message);
            throw new Error("Failed to update game code");
        }
    }
);

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(updateGameCode.pending, (state) => {
                state.gameCodeUpdateStatus = 'pending';
                state.error = null;
            })
            .addCase(updateGameCode.fulfilled, (state, action) => {
                state.gameCodeUpdateStatus = 'succeeded';
                state.gameDetail = action.payload; // Update gameDetail with the received data
            })
            .addCase(updateGameCode.rejected, (state, action) => {
                state.gameCodeUpdateStatus = 'failed';
                state.error = action.error.message || 'Failed to update game code';
            });
    },
});

export default gameSlice.reducer;
