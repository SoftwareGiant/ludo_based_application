import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';


const initialState = {
  accessToken: localStorage.getItem('accessToken') || null,
  refreshToken: localStorage.getItem('refreshToken') || null,
  user: null,
};


export const loginAsync = createAsyncThunk(
  'auth/login',
  async (mobileNo, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/user/login", { mobileNo: mobileNo });
      // Handle the response data here
      const data = response.data;
      // console.log(data);
      if (!data || !data.accessToken) {
        throw new Error('Login failed');
      }
      const { accessToken, refreshToken } = data;
    // const accessToken = response.headers.get("Authorization"); 
    // const refreshToken = document.cookie 
    //   .split("; ")
    //   .find((row) => row.startsWith("refreshToken"))
    //   .split("=")[1];
    //   console.log(accessToken,refreshToken,"balajee mishra")
    // const data = response.data;
    // if(!accessToken){
    //   throw new Error("Login failed");
    // }
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      return data;
    }
    catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logoutAsync = createAsyncThunk(
  'auth/logout',
  async ({ token, refreshtoken }) => {
    console.log("logout")
    // const token = await JSON.parse(localStorage.getItem('accessToken'));
    // const refreshToken =await JSON.parse(localStorage.getItem('refreshToken'));
    console.log(token, refreshtoken);
    try {
      const response = await axios.post(
        '/api/user/logout',
        { refreshToken: refreshtoken },
        {
          headers: {
            Authorization: `Bearer ${token}`,
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
      toast.error(error);
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
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
        return;
      })
  },
});


export const selectToken = (state) => state.auth.accessToken;
export const selectRefreshToken = (state) => state.auth.refreshToken;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

// export { loginAsync, logoutAsync };

export default authSlice.reducer;
