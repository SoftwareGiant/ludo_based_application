import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    error: null,
    openChallenges: [],
};

export const fetchOpenChallenges = createAsyncThunk(
    'opengame/fetchOpenChallenges',
    async () => {
        const accessToken = localStorage.getItem('accessToken');
        try {
            const response = await axios.get('/api/game/openchallenge',
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
                }
            );
            return response.data.allOpenChallenge;
        }
        catch (error) {
            toast.error(error);
            throw new Error('Failed to update game code');
        }
    }
);

const openChallengeSlice = createSlice({
    name: 'opengame',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOpenChallenges.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchOpenChallenges.fulfilled, (state, action) => {
                state.loading = false;
                state.openChallenges = action.payload;
            })
            .addCase(fetchOpenChallenges.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default openChallengeSlice.reducer;
