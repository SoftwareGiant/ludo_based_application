import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpDesktop from "./components/app_start/SignUpDesktop";
import NewGame from "./components/live_battle/NewGame";
import NewProfile from "./components/profile/NewProfile";
import GameHistoryComponent from "./components/game_history/GameHistoryComponent";
import TransactionHistoryPc from "./components/transaction_history/TransactioHistoryPc";
import NotificationPc from "./components/notification/NotificationPc";
import MyWalletMain from "./components/wallet/MyWalletMain";
import ListedGamePc from "./components/listedgame/ListedGamePc";
import ReferrEarnPc from "./components/refer_and_earn/ReferrEarnPc";
import SupportPc from "./components/support/SupportPc";
import AddCashPc from "./components/wallet/AddCashPc";
import WithDrawPc from "./components/wallet/WithDrawPc";
import ReferalBalancePc from "./components/wallet/ReferalBalancePc";
import Login from "./components/admin_and_S.admin/admin/Login";
import SAdminLogin from "./components/admin_and_S.admin/superadmin/SAdminLogin";
import NewOnboard from "./components/admin_and_S.admin/admin/NewOnboard";
// need some work
import Info from "./components/continue/Info";
import FilterLiveBattle from "./components/live_battle/FilterLiveBattle";
import LiveBattle from "./components/live_battle/LiveBattle";
import LiveBattle2 from "./components/live_battle/LiveBattle2";
import OpenChallengeReq from "./components/live_battle/OpenChallengeReq";
import ResponGame from "./components/live_battle/ResponGame";
import NewProfileMob from "./components/profile/NewProfileMob";
import NewProfileResp from "./components/profile/NewProfileResp";
import GameCash from "./components/listedgame/GameCash";
import CardClickInstance from "./components/listedgame/CardClickInstance";
import CardClickInstance2 from "./components/listedgame/CardClickInstance2";
import CardClickInstance3 from "./components/listedgame/CardClickInstance3";
import InstanceStop from "./components/listedgame/InstanceStop";
import RequestMatch from "./components/listedgame/RequestMatch";
import RequestCounter from "./components/listedgame/RequestCounter";
import MatchStart from "./components/listedgame/MatchStart";
import NewGameMob from "./components/live_battle/NewGameMob";
import UploadProfile from "./components/profile/UploadProfile";
import NewProfilePic from "./components/profile/NewProfilePic";
import NewProfileEmailAdded2 from "./components/profile/NewProfileEmailAdded2";
import NewProfile2 from "./components/profile/NewProfile2";
import ReferalsBalanceWithDraw from "./components/wallet/ReferalsBalanceWithDraw";
import GameHistoryMob from "./components/game_history/GameHistoryMob";
import TransactioHistoryMob from "./components/transaction_history/TransactioHistoryMob";
import ReferrEarn from "./components/refer_and_earn/ReferrEarnMob";
import Support from "./components/support/SupportMob";
import Notification from "./components/notification/Notification";
import Instance2Pc from "./components/listedgame/Instance2Pc";
import ChatWithUserPc from "./components/listedgame/ChatWithUserPc";
import ItsAMatch from "./components/listedgame/ItsAMatch";
import RequestCounterPc from "./components/listedgame/RequestCounterPc";
import ProfileImagePC from "./components/profile/ProfileImagePC";
import OtpPc from "./components/app_start/OtpPc";
import SignUpSucess from "./components/app_start/SignUpSucess";
import AppTour from "./components/app_start/AppTour";
import ReferrEarnMob from "./components/refer_and_earn/ReferrEarnMob";
import SupportMob from "./components/support/SupportMob";
import { useMediaQuery } from "react-responsive";
import MainLayout from "./components/MainLayout/MainLayout";
import MyButton from "./components/MainLayout/MyButton";
import GameHistoryPc from "./components/game_history/GameHistoryPc";
import TopbarMobile from "./components/MainLayout/TopbarMobile";
import NewGameSLider from "./components/live_battle/NewGameSLider";
import ChatUserMob from "./components/listedgame/ChatUserMob";
import ButtonLoader from "./components/MainLayout/ButtonLoader";
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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Login />} />
          <Route path="/superadmin" element={<SAdminLogin />} />
          <Route path="/onboard" element={<NewOnboard />} />
          <Route path="/login" element={<LoginMob />} />

          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/apptour" element={<AppTour />} />
            {/* new game page routes */}
            <Route path="/" element={<NewGameMob />} />
            <Route path="/livebattle" element={<LiveBattle />} />
            <Route path="/livebattle2" element={<LiveBattle2 />} />
            <Route path="/filter" element={<FilterLiveBattle />} />
            <Route path="/requestchallange" element={<OpenChallengeReq />} />
            <Route path="/chat" element={<ChatUserMob />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/userprofile2" element={<UserProfile2 />} />
            <Route path="/userprofile3" element={<UserProfile3 />} />
            <Route path="/matchstart" element={<MatchProgress />} />
            <Route path="/help" element={<HelpPage />} />
            {/* Profile page routes */}
            <Route path="/profile" element={<NewProfileMob />} />
          

            <Route path="/editprofile" element={<NewProfilePic />} />
            {/* wincash page */}
            <Route path="/wincash" element={<ListedGameMOb />} />
            {/* my wallet page */}
            <Route path="/mywallet" element={<MyWalletMob />} />
            <Route path="/deposite" element={<AddCashMob />} />
            <Route path="/withdraw" element={<WithdrawMob />} />
            <Route path="/gamehistory" element={<GameHistoryMob />} />
            <Route
              path="/transactionhistory"
              element={<TransactioHistoryMob />}
            />
            <Route path="/refer&earn" element={<ReferrEarnMob />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/support" element={<SupportMob />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/content" element={<Content />} />
          </Route>

          <Route path="/reedem" element={<ReferalBalancePc />} />

          <Route path="/startbattle" element={<CardClickInstance />} />
        </Routes>
      </BrowserRouter>

      {/* <Route
            path="/"
            element={
              useMediaQuery({ minWidth: 768 }) ? <NewGame /> : <NewGameMob />
            }
          /> */}

      {/* <Info /> */}
      {/* <SignUpDesktop /> */}
      {/* <OtpPc /> */}
      {/* <SignUpSucess /> */}
      {/* <AppTour /> */}
      {/* <NewGame /> */}
      {/* <ResponGame /> */}
      {/* <NewGameMob /> */}
      {/* <LiveBattle /> */}
      {/* <LiveBattle2 /> */}
      {/* <FilterLiveBattle /> */}
      {/* <OpenChallengeReq /> */}
      {/* <CardClickInstance /> */}
      {/* <CardClickInstance2 /> */}
      {/* <CardClickInstance3 /> */}
      {/* <InstanceStop /> */}
      {/* <RequestMatch /> */}
      {/* <RequestCounter /> */}
      {/* <MatchStart /> */}
      {/* <NewProfile /> */}
      {/* <ProfileImagePC /> */}
      {/* <NewProfileMob /> */}
      {/* <NewProfile2/> */}
      {/* <UploadProfile/> */}
      {/* <NewProfilePic /> */}
      {/* <NewProfileEmailAdded2/> */}
      {/* <MyWalletMain /> */}
      {/* <AddCashPc /> */}
      {/* <WithDrawPc /> */}
      {/* <ReferalBalancePc /> */}
      {/* <ListedGamePc /> */}
      {/* <Instance2Pc /> */}
      {/* <ChatWithUserPc /> */}
      {/* <ItsAMatch /> */}
      {/* <RequestCounterPc /> */}
      {/* <ReferalsBalanceWithDraw /> */}
      {/* <ReferrEarnPc /> */}
      {/* <GameHistoryPc /> */}
      {/* <TransactionHistoryPc /> */}
      {/* <NotificationPc /> */}
      {/* <SupportPc /> */}
      {/* <ReferrEarnPc /> */}
      {/* ============================== */}
      {/* <NewProfileResp /> */}
      {/* <MyWalletmobile /> */}
      {/* <GameHistoryMob /> */}
      {/* <Notification /> */}
      {/* <Support /> */}
      {/* <ReferrEarnMob /> */}
      {/* <TransactioHistoryMob /> */}
      {/* <GameCash /> */}
      {/* <SupportMob /> */}
      {/* <Route path="/success" element= {<SignUpSucess/>}/>
          <Route path="/apptour" element= {<AppTour/>}/>
          <Route path="/otppc" element= {<OtpPc/>}/>
          <Route path="/info" element= {<Info/>}/>
          <Route path="/cardclick" element= {<CardClickInstance/>}/>
          <Route path="/cardclick2" element= {<CardClickInstance2/>}/>
          <Route path="/chatwithpc" element= {<ChatWithUserPc/>}/> */}
    </>
  );
}

export default App;
