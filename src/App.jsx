import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpDesktop from "./components/app_start/SignUpDesktop";
import NewGame from "./components/live_battle/NewGame";
import NewProfile from "./components/profile/NewProfile";
import GameHistoryPc from "./components/game_history/GameHistoryPc";
import TransactionHistoryPc from "./components/transaction_history/TransactioHistoryPc";
import NotificationPc from "./components/notification/NotificationPc";
import MyWalletMain from "./components/wallet/MyWalletMain";
import ListedGamePc from "./components/listedgame/ListedGamePc";
import ReferrEarnPc from "./components/refer_and_earn/ReferrEarnPc";
import SupportPc from "./components/support/SupportPc";
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
import MyWalletPc from "./components/wallet/MyWalletPc";
import MyWalletmobile from "./components/wallet/MyWalletmobile";
import DepositeCash1 from "./components/wallet/DepositeCash1";
import DepositeCah2 from "./components/wallet/DepositeCah2";
import ReferalsBalanceWithDraw from "./components/wallet/ReferalsBalanceWithDraw";
import GameHistory from "./components/game_history/GameHistory";
import TransactioHistoryMob from "./components/transaction_history/TransactioHistoryMob";
import ReferrEarn from "./components/refer_and_earn/ReferrEarnMob";
import Support from "./components/support/SupportMob";
import Notification from "./components/notification/Notification";
import AddCashPc from "./components/wallet/AddCashPc";
import WithDrawPc from "./components/wallet/WithDrawPc";
import ReferalBalancePc from "./components/wallet/ReferalBalancePc";
import Instance2Pc from "./components/listedgame/Instance2Pc";
import ChatWithUserPc from "./components/listedgame/ChatWithUserPc";
import ItsAMatch from "./components/listedgame/ItsAMatch";
import RequestCounterPc from "./components/listedgame/RequestCounterPc";
import ProfileImagePC from "./components/profile/ProfileImagePC";
import OtpPc from "./components/app_start/OtpPc";
import SignUpSucess from "./components/app_start/SignUpSucess";
import AppTour from "./components/app_start/AppTour";
import ReferrEarnMob from "./components/refer_and_earn/ReferrEarnMob";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SignUpDesktop />} />
          <Route path="/" element={<NewGame />} />
          <Route path="/profile" element={<NewProfile />} />
          <Route path="/wincash" element={<ListedGamePc />} />
          <Route path="/mywallet" element={<MyWalletMain />} />
          <Route path="/gamehistory" element={<GameHistoryPc />} />
          <Route
            path="/transactionhistory"
            element={<TransactionHistoryPc />}
          />
          <Route path="/referr&earn" element={<ReferrEarnPc />} />
          <Route path="/notification" element={<NotificationPc />} />
          <Route path="/support" element={<SupportPc />} />
        </Routes>
      </BrowserRouter> */}
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
      {/* <GameCash /> */}
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
      {/* <NewProfileResp /> */}
      {/* <NewProfile2/> */}
      {/* <UploadProfile/> */}
      {/* <NewProfilePic /> */}
      {/* <NewProfileEmailAdded2/> */}
      {/* <MyWalletPc /> */}
      {/* <MyWalletMain /> */}
      {/* <AddCashPc /> */}
      {/* <WithDrawPc /> */}
      {/* <ReferalBalancePc /> */}
      {/* <ListedGamePc /> */}
      {/* <Instance2Pc /> */}
      {/* <ChatWithUserPc /> */}
      {/* <ItsAMatch /> */}
      {/* <RequestCounterPc /> */}
      {/* <MyWalletmobile /> */}
      {/* <DepositeCash1 /> */}
      {/* <DepositeCah2 /> */}
      {/* <ReferalsBalanceWithDraw /> */}
      {/* <GameHistory /> */}
      {/* <ReferrEarnPc /> */}
      {/* <GameHistoryPc /> */}
      {/* <TransactionHistoryPc /> */}
      {/* <NotificationPc /> */}
      {/* <SupportPc /> */}
      {/* <ReferrEarnPc /> */}
      {/* ============================== */}
      {/* <Notification /> */}
      {/* <Support /> */}
      {/* <ReferrEarnMob /> */}
      <TransactioHistoryMob />
    </>
  );
}

export default App;
