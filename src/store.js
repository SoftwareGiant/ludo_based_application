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
import ChatReducer from "./components/Chathistory/ChatSlice";
import favoriteMessagesReducer from "./components/Chathistory/favoriteMessagesSlice"
import AdminSuperAdminListReducer from "./components/admin_and_S.admin/superadmin/SuperAdminSlices/AdminSuperAdminListSlice";
import withdrawalsReducer from "./components/admin_and_S.admin/superadmin/SuperAdminSlices/withdrawalsSlice";
import userAllHistoryReducer from "./components/admin_and_S.admin/admin/AdminSlice/userAllHistorySlice";
import NotificationReducer from "./components/notification/NotificationSlice";
import openChallengeReducer from "./components/live_battle/openChallengeSlice";
import supportUserChatReducer from "./components/support/supportUserChatSlice";
import adminsupportlistReducer from "./components/admin_and_S.admin/admin/AdminSlice/adminsupportlistSlice";
import supportMessagesReducer from "./components/admin_and_S.admin/admin/AdminSlice/supportMessagesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    battle: battleReducer,
    match: matchReducer,
    game: gameReducer,
    userhistory: userHistoryReducer,
    gamehistory: gamehistoryReducer,
    allUsers: alluserReducer,
    allkyc: allkycuserReducer,
    allDepositRequests: allDepositRequestsReducer,
    allWithdrawalRequests: allWithdrawalRequestsReducer,
    gameHistory: gameHistoryReducer,
    chatAll: ChatReducer,
    favChat: favoriteMessagesReducer,
    socketfor: socketReducer,
    userAllHistory: userAllHistoryReducer,
    notifications: NotificationReducer,

    alladmins: AdminSuperAdminListReducer,
    allwithdrawal: withdrawalsReducer,
    opengame: openChallengeReducer,
    supportuser: supportUserChatReducer,
    adminsupportlist: adminsupportlistReducer,
    supportMessages: supportMessagesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

});