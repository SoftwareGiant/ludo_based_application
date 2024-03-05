// import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const fetchAllUsers = async () => {
//     const accessToken = localStorage.getItem('accessToken');
//     try {
//         const response = await axios.get('api/user/', {
//             headers: {
//                 Authorization: `Bearer ${accessToken}`,
//             }
//         });
//         return response.data.users;
//     } catch (error) {
//         console.error('Error fetching all users:', error);
//         throw error;
//     }
// };

// const alluserSlice = createSlice({
//     name: 'allUsers',
//     initialState: {
//         users: [],
//         status: 'idle',
//         error: null,
//     },
//     extraReducers: {
//         [fetchAllUsers.pending]: (state) => {
//             state.status = 'loading';
//         },
//         [fetchAllUsers.fulfilled]: (state, action) => {
//             state.status = 'succeeded';
//             state.users = action.payload;
//         },
//         [fetchAllUsers.rejected]: (state, action) => {
//             state.status = 'failed';
//             state.error = action.error.message;
//         },
//     },
// });

// export const selectAllUsers = (state) => state.allUsers.users;
// export const selectAllUsersStatus = (state) => state.allUsers.status;

// export default alluserSlice.reducer;



import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllUsers = createAsyncThunk(
  'allUsers/fetchAllUsers',
  async () => {
    const accessToken = localStorage.getItem('accessToken');
    try {
      const response = await axios.get('api/user/', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data.users;
    } catch (error) {
      console.error('Error fetching all users:', error);
      throw error;
    }
  }
);

const alluserSlice = createSlice({
  name: 'allUsers',
  initialState: {
    users: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handle thunk actions using a builder callback
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllUsers = (state) => state.allUsers.users;
export const selectAllUsersStatus = (state) => state.allUsers.status;

export default alluserSlice.reducer;
