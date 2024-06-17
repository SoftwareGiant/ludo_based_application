import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';


const initialState = {
  accessToken: localStorage.getItem('accessToken') || null,
  refreshToken: localStorage.getItem('refreshToken') || null,
  user: null,
};

export const registerAsync = createAsyncThunk(
  'auth/register',
  async (mobileNo, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/user/register", { mobileNo: mobileNo });
      const data = response.data;
      if (!data || !data.accessToken) {
        throw new Error('register failed');
      }
      const { accessToken, refreshToken } = data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      return data;
    }
    catch (error) {
      console.log(error);
      toast.error(error)
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginAsync = createAsyncThunk(
  'auth/login',
  async (mobileNo, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/user/login", { mobileNo: mobileNo });
      const data = response.data;
      if (!data || !data.accessToken) {
        throw new Error('Login failed');
      }
      const { accessToken, refreshToken } = data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      return data;
    }
    catch (error) {
      console.log(error);
      toast.error(error)
      return rejectWithValue(error.response.data);
    }
  }
);

export const logoutAsync = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (!refreshToken || !accessToken) {

      return thunkAPI.rejectWithValue('Token not found');
    }
    try {
      const response = await axios.post(
        '/api/user/logout',
        { refreshToken: refreshToken },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log(response)
      if (!response.statusText) {
        throw new Error('Logout failed');
      }
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    }
    catch (error) {
      console.log(error)
      if (error.response.status === 400 || error.response.data.message === "Unauthorized credential") {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
      }
      toast.error(error);
      return thunkAPI.rejectWithValue(error.message || 'An error occurred during logout');

    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        const { accessToken, refreshToken } = action.payload;
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.accessToken = null;
        state.refreshToken = null;
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.accessToken = null;
        state.refreshToken = null;
      })
      .addCase(logoutAsync.rejected, (state, action) => {

        state.accessToken = null;
        state.refreshToken = null;
        return;
      })
  },
});


export const selectToken = (state) => state.auth.accessToken;
export const selectRefreshToken = (state) => state.auth.refreshToken;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;
