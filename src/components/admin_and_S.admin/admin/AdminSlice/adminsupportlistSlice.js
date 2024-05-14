import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    messages: [],
    loading: false,
    error: null,
};
export const fetchadminsupportlist = createAsyncThunk(
    "adminsupportlist/fetchadminsupportlist",
    async () => {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
            throw new Error('Token not found');
        }
        try {
            const response = await axios.get("/api/support/listofall",
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            return response.data?.listofall;
        } catch (error) {
            throw error;
        }
    }
);



const adminsupportlistSlice = createSlice({
    name: 'adminsupportlist',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchadminsupportlist.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchadminsupportlist.fulfilled, (state, action) => {
                state.loading = false;
                state.messages = action.payload;
            })
            .addCase(fetchadminsupportlist.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default adminsupportlistSlice.reducer;
