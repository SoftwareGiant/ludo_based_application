import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./components/app_start/authSlice";
import userReducer from "./components/live_battle/userSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user:userReducer,
    },
});