import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./components/app_start/authSlice";


export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});