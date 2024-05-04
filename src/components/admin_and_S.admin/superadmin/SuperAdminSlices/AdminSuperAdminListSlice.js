import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const fetchAdminSadmin = createAsyncThunk(
    "alladmins/fetchAdminSadmin",
    async () => {

        const accessToken = localStorage.getItem('accessToken');
        try {
            const response = await axios.get('/api/superadmin/alladminandsuperadmin', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
          
            return response.data.allAdmin;
        } catch (error) {
            toast.error('Error fetching all users:', error);
            throw error;
        }
    }
);


const AdminSuperAdminListSlice = createSlice({
    name: 'alladmins',
    initialState: {
        adminList: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        // Handle thunk actions using a builder callback
        builder
            .addCase(fetchAdminSadmin.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAdminSadmin.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.adminList = action.payload;
            })
            .addCase(fetchAdminSadmin.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});


export default AdminSuperAdminListSlice.reducer;
