import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./components/app_start/authSlice";
import userReducer from "./components/live_battle/userSlice";
import battleReducer from "./components/live_battle/battleSlice";
import matchReducer from "./components/live_battle/matchSlice";
import gameReducer from "./components/live_battle/gameSlice";
import userHistoryReducer from "./components/transaction_history/userHistorySlice";
import gamehistoryReducer from "./components/game_history/gamehistorySlice";
import alluserReducer from "./components/admin_and_S.admin/admin/AdminSlice/alluserSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        battle: battleReducer,
        match: matchReducer,
        game: gameReducer,
        userhistory: userHistoryReducer,
        gamehistory:gamehistoryReducer,
        allUsers:alluserReducer
    },
});
