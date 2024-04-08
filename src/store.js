import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./components/app_start/authSlice";
import userReducer from "./components/live_battle/userSlice";
import battleReducer from "./components/live_battle/battleSlice";
import matchReducer from "./components/live_battle/matchSlice";
import gameReducer from "./components/live_battle/gameSlice";
import socketReducer from "../src/socket"
import userHistoryReducer from "./components/transaction_history/userHistorySlice";
import gamehistoryReducer from "./components/game_history/gamehistorySlice";
import alluserReducer from "./components/admin_and_S.admin/admin/AdminSlice/alluserSlice";
import allkycuserReducer from "./components/admin_and_S.admin/admin/AdminSlice/AllKycSlice";
import allDepositRequestsReducer from "./components/admin_and_S.admin/admin/AdminSlice/depositeHisory";
import allWithdrawalRequestsReducer from "./components/admin_and_S.admin/admin/AdminSlice/withdrawlSlice";
import gameHistoryReducer from "./components/admin_and_S.admin/admin/AdminSlice/gameHistorySlice ";





export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        battle: battleReducer,
        match: matchReducer,
        game: gameReducer,
        userhistory: userHistoryReducer,
        gamehistory:gamehistoryReducer,
        allUsers:alluserReducer,
        allkyc:allkycuserReducer,
        allDepositRequests:allDepositRequestsReducer,
        allWithdrawalRequests:allWithdrawalRequestsReducer,
        gameHistory:gameHistoryReducer,
        socket:socketReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

});