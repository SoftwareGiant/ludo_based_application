import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SAdminLogin from "./components/admin_and_S.admin/superadmin/SAdminLogin";
// import NewOnboard from "./components/admin_and_S.admin/admin/NewOnboard";
import NewOnboard from "./components/admin_and_S.admin/admin/Pages/NewOnboard.jsx";
// need some work

import LiveBattle from "./components/live_battle/LiveBattle";
import LiveBattle2 from "./components/live_battle/LiveBattle2";
import OpenChallengeReq from "./components/live_battle/OpenChallengeReq";
import NewProfileMob from "./components/profile/NewProfileMob";

import NewGameMob from "./components/live_battle/NewGameMob";
import NewProfilePic from "./components/profile/NewProfilePic";
// import NewProfile2 from "./components/profile/NewProfile2";
import ReferalsBalanceWithDraw from "./components/wallet/ReferalsBalanceWithDraw";
import GameHistoryMob from "./components/game_history/GameHistoryMob";
import TransactioHistoryMob from "./components/transaction_history/TransactioHistoryMob";
import Notification from "./components/notification/Notification";

import SignUpSucess from "./components/app_start/SignUpSucess";
import AppTour from "./components/app_start/AppTour";
import ReferrEarnMob from "./components/refer_and_earn/ReferrEarnMob";
import SupportMob from "./components/support/SupportMob";
import { useMediaQuery } from "react-responsive";

import ChatUserMob from "./components/listedgame/ChatUserMob";

import MatchProgress from "./components/live_battle/MatchProgress";
import HelpPage from "./components/live_battle/HelpPage";
import LoginMob from "./components/app_start/LoginMob";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import MyWalletMob from "./components/wallet/MyWalletMob";
import ListedGameMOb from "./components/listedgame/ListedGameMOb";
import AddCashMob from "./components/wallet/AddCashMob";
import WithdrawMob from "./components/wallet/WithdrawMob";
import Terms from "./components/policy/Terms";
import Content from "./components/policy/Content";
import Privacy from "./components/policy/Privacy";
import Feedback from "./components/support/Feedback";
import UserProfile from "./components/live_battle/UserProfile";
import UserProfile2 from "./components/live_battle/userProfile2";
import UserProfile3 from "./components/live_battle/UserProfile3";
import AdminLayout from "./components/admin_and_S.admin/admin/AdminLayout";
import KycVerification from "./components/admin_and_S.admin/admin/Pages/KycVerification";
import GameVerificaion from "./components/admin_and_S.admin/admin/Pages/GameVerificaion.jsx";
import Deposite from "./components/admin_and_S.admin/admin/Pages/Deposite.jsx";
import Withdraw from "./components/admin_and_S.admin/admin/Pages/Withdraw.jsx";
import ReferaalTrack from "./components/admin_and_S.admin/admin/Pages/ReferaalTrack.jsx";
import UserHistory from "./components/admin_and_S.admin/admin/Pages/UserHistory.jsx";
import AdminSupport from "./components/admin_and_S.admin/admin/Pages/AdminSupport.jsx";
import AdminCustomer from "./components/admin_and_S.admin/admin/Pages/AdminCustomer.jsx";
import SuperAdminLayout from "./components/admin_and_S.admin/superadmin/SuperAdminLayout.jsx";
import SuperDashboard from "./components/admin_and_S.admin/superadmin/Pages/SuperDashboard.jsx";
import SuperNotification from "./components/admin_and_S.admin/superadmin/Pages/SuperNotification.jsx";
import SuperAdmins from "./components/admin_and_S.admin/superadmin/Pages/SuperAdmins.jsx";
import SuperTournaments from "./components/admin_and_S.admin/superadmin/Pages/SuperTournaments.jsx";
import SuperCustomer from "./components/admin_and_S.admin/superadmin/Pages/SuperCustomer.jsx";
import SuperDeposite from "./components/admin_and_S.admin/superadmin/Pages/SuperDeposite.jsx";
import SuperWithdrawal from "./components/admin_and_S.admin/superadmin/Pages/SuperWithdrawal.jsx";
import Chathistory from "./components/Chathistory/Chathistory.jsx";
import MatchUserChat from "./components/Chathistory/MatchUserChat.jsx";
import AdminSLides from "./components/admin_and_S.admin/admin/Pages/AdminSLides.jsx";
import ErrorBoundary from "./Errorboundary.jsx";
import CustomerChat from "./components/admin_and_S.admin/admin/Common.jsx/CustomerChat.jsx";
import NotFoundpage from "./components/MainLayout/NotFoundpage.jsx";
import GameRule from "./components/MainLayout/GameRule.jsx";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/adminlogin" element={<SAdminLogin />} />
          <Route path="/login" element={<LoginMob />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/content" element={<Content />} />
          <Route path="/gamerule" element={<GameRule />} />
          <Route path="/" element={<NewGameMob />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/apptour" element={<AppTour />} />
            {/* new game page routes */}

            <Route path="/livebattle" element={<LiveBattle />} />
            <Route path="/livebattle2" element={<LiveBattle2 />} />
            <Route
              path="/requestchallange/:userId"
              element={<OpenChallengeReq />}
            />
            {/* <Route path="/chat" element={<ChatUserMob />} /> */}
            <Route path="/chat/:chatId/:player" element={<ChatUserMob />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/userprofile2" element={<UserProfile2 />} />
            <Route path="/userprofile3" element={<UserProfile3 />} />
            <Route path="/matchstart" element={<MatchProgress />} />
            <Route path="/help" element={<HelpPage />} />
            {/* Profile page routes */}

            <Route path="/profile" element={<NewProfileMob />} />
            <Route path="/editprofile" element={<NewProfilePic />} />

            {/* wincash page */}

            {/* <Route path="/wincash" element={<ListedGameMOb />} /> */}

            {/* my wallet page */}

            <Route path="/mywallet" element={<MyWalletMob />} />
            <Route path="/deposite" element={<AddCashMob />} />
            <Route path="/withdraw" element={<WithdrawMob />} />
            <Route
              path="referalwithdraw"
              element={<ReferalsBalanceWithDraw />}
            />
            <Route path="/gamehistory" element={<GameHistoryMob />} />
            <Route
              path="/transactionhistory"
              element={<TransactioHistoryMob />}
            />
            <Route path="/refer&earn" element={<ReferrEarnMob />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/support" element={<SupportMob />} />
            <Route path="/chathistory" element={<Chathistory />} />
            <Route path="/matchUserChat/:chatId" element={<MatchUserChat />} />

            <Route path="/feedback" element={<Feedback />} />
          </Route>

          {/* admin routes */}

          <Route path="/" element={<AdminLayout />}>
            <Route path="/newonboard" element={<NewOnboard />} />
            <Route path="/kycverification" element={<KycVerification />} />
            <Route path="/admingamehistory" element={<GameVerificaion />} />
            <Route path="/admindeposite" element={<Deposite />} />
            <Route path="/adminwithdraw" element={<Withdraw />} />
            <Route path="/adminreferral" element={<ReferaalTrack />} />
            <Route path="/adminuserhistory" element={<UserHistory />} />
            <Route path="/adminsuport" element={<AdminSupport />} />
            <Route path="/admincustomer" element={<AdminCustomer />}>
              <Route path=":userId" element={<CustomerChat />} />
            </Route>
            <Route path="/adminslides" element={<AdminSLides />} />
          </Route>

          {/* super admin routes */}
          <Route path="/superadmin" element={<SuperAdminLayout />}>
            <Route path="" element={<SuperDashboard />} />
            <Route path="notification" element={<SuperNotification />} />
            <Route path="admins" element={<SuperAdmins />} />
            <Route path="tournaments" element={<SuperTournaments />} />
            <Route path="customer" element={<SuperCustomer />} />
            <Route path="deposite" element={<SuperDeposite />} />
            <Route path="withdrawal" element={<SuperWithdrawal />} />
          </Route>
          <Route path="*" element={<NotFoundpage />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
