import React from "react";
import { Drawer, Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import AddGame from "../../assets/new_game/addgame.svg";
import Profile from "../../assets/new_game/profile.svg";
import GameHistory from "../../assets/new_game/history.svg";
import ReferEarn from "../../assets/new_game/refer&earn.svg";
import Notification from "../../assets/new_game/notification.svg";
import Support from "../../assets/new_game/support.svg";
import BackBlack from "../../assets/profile/back_black.svg";
import { IoMenu } from "react-icons/io5";
import { Icon } from "@iconify-icon/react";
import { useDispatch, useSelector } from "react-redux";

export function SidebarMob({
  isClick1,
  isClick2,
  isClick4,
  isClick5,
  isClick6,
  isClick7,
  isClick8,
  isClick9,
  users,
}) {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const navigate = useNavigate();
  console.log(users);

  return (
    <React.Fragment>
      <Button className="bg-[#fead3a]  shadow-none p-0 hover:shadow-none">
        <IoMenu
          onClick={openDrawer}
          className="text-white w-[28px] h-[28px] "
        />
      </Button>

      <Drawer
        className="bg-[#fead3a]  min-h-screen h-[40%] overflow-scroll"
        size={490}
        open={open}
        onClose={closeDrawer}
      >
        <div className="w-full h-8" />
        <Button
          className="bg-yello shadow-none hover:shadow-none p-0 px-4"
          onClick={closeDrawer}
        >
          <img
            src={BackBlack}
            alt="HardwareKeyboardBackspace icon"
            id="Epback"
            className="text-black w-6"
          />
        </Button>

        <div className="flex flex-col justify-between w-full ">
          {users ? (
            <div className="flex flex-col justify-center  mx-auto gap-2 w-3/5 items-center">
              <Link
                to="/"
                className={`border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]   ${
                  isClick1 ? "bg-[#ffcc4d]" : "bg-white"
                } flex flex-row gap-2 w-full h-8 items-center  px-3 border rounded-lg`}
              >
                <img
                  src={AddGame}
                  alt="ContentAdd icon"
                  id="Materialsymbolsadd"
                  className="w-5"
                />
                <div className="text-xs font-['Nunito_Sans'] font-bold text-[#0f002b]">
                  New game
                </div>
              </Link>
              <Link
                to="/profile"
                className={`border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] ${
                  isClick2 ? "bg-[#ffcc4d]" : "bg-white"
                } flex flex-row gap-2 w-full h-8 items-center px-3 border rounded-lg`}
              >
                <img
                  src={Profile}
                  alt="SocialPersonOutline icon"
                  className="w-5"
                />
                <div className="text-xs font-['Nunito_Sans'] font-bold">
                  Profile
                </div>
              </Link>

              <Link
                to="/mywallet"
                className={`
         
          border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]  flex  gap-2 w-full h-8 items-center justify-between pt-2 px-3 border rounded-lg
          ${isClick4 ? "bg-[#ffcc4d]" : "bg-white"}
          `}
              >
                <div className="flex items-center gap-2">
                  <Icon icon="ph:wallet-light" width={20} />
                  <p className="text-xs -mt-1 font-['Nunito_Sans'] font-bold">
                    My Wallet
                  </p>
                </div>
                <div className="bg-black cursor-pointer hover:shadow-md flex items-center gap-2 -mt-2 rounded-2xl px-2  text-white">
                  <p>₹{users?.walletDetails?.totalAmount}</p>{" "}
                </div>
              </Link>
              <Link
                to="/gamehistory"
                className={`
       
          border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]  flex flex-row gap-2 w-full h-8 items-start pt-2 px-3 border rounded-lg
          ${isClick5 ? "bg-[#ffcc4d]" : "bg-white"}
          `}
              >
                <img
                  src={GameHistory}
                  alt="ActionHistory icon"
                  id="lgihistory"
                  className="w-5"
                />
                <div className="text-xs font-['Nunito_Sans'] font-bold">
                  Game History
                </div>
              </Link>
              <Link
                to="/transactionhistory"
                className={`
        
          border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]  flex flex-row gap-2 w-full h-8 items-center px-3 border rounded-lg
          ${isClick6 ? "bg-[#ffcc4d]" : "bg-white"}
          `}
              >
                <img
                  src={Profile}
                  alt="SocialPersonOutline icon"
                  className="w-5"
                />
                <div className="text-xs font-['Nunito_Sans'] font-bold">
                  Transaction History
                </div>
              </Link>
              <Link
                to="/refer&earn"
                className={`
          
          border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]  flex flex-row gap-2 w-full h-8 items-center px-3 border rounded-lg
          ${isClick7 ? "bg-[#ffcc4d]" : "bg-white"}
          `}
              >
                <img
                  src={ReferEarn}
                  alt="Gameiconsreceivemoney"
                  className="w-5"
                />
                <div className="text-xs font-['Nunito_Sans'] font-bold">
                  Refer and Earn
                </div>
              </Link>
              <Link
                to="/notification"
                className={`
        
          border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]  flex flex-row gap-2 w-full h-8 items-center px-3 border rounded-lg
          ${isClick8 ? "bg-[#ffcc4d]" : "bg-white"}
          `}
              >
                <img
                  src={Notification}
                  alt="Iconamoonnotificationlight"
                  className="w-5"
                />
                <div className="text-xs font-['Nunito_Sans'] font-bold">
                  Notification
                </div>
              </Link>
              <Link
                to="/support"
                className={`
       
          border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]  flex flex-row gap-2 w-full h-8 items-center px-3 border rounded-lg
          ${isClick9 ? "bg-[#ffcc4d]" : "bg-white"}
          `}
              >
                <img
                  src={Support}
                  alt="Materialsymbolssupportagent"
                  className="w-5"
                />
                <div className="text-xs font-['Nunito_Sans'] font-bold">
                  Support
                </div>
              </Link>
              <Link
                to="/chathistory"
                className={`    
          border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]  flex flex-row gap-2 w-full h-8 items-center px-3 border rounded-lg
          ${isClick9 ? "bg-[#ffcc4d]" : "bg-white"}
          `}
              >
                <Icon icon="tdesign:chat-bubble-history" />
                <div className="text-xs font-['Nunito_Sans'] font-bold">
                  Chat History
                </div>
              </Link>
              {users.role === "admin" && (
                <Link
                  to="/newonboard"
                  className={`    
          border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]  flex flex-row gap-2 w-full h-8 items-center px-3 border rounded-lg
          ${isClick9 ? "bg-[#ffcc4d]" : "bg-white"}
          `}
                >
                  <Icon icon="ri:admin-fill" />
                  <div className="text-xs font-['Nunito_Sans'] font-bold">
                    Admin Dashboard
                  </div>
                </Link>
              )}
            </div>
          ) : (
            <div className="flex flex-col w-full">
              <Button
                onClick={() => navigate("/login")}
                className="text-white rounded-2xl w-[70%] m-auto mt-6 flex items-center gap-2 justify-center"
              >
                <Icon icon="mdi:user" width={26} />
                <p className="text-base "> Login or Signup</p>
              </Button>
              <Button
                onClick={() => window.location.reload()}
                className="text-black bg-white rounded-2xl w-[70%] m-auto mt-6 flex items-center gap-2 justify-center"
              >
                <Icon icon="ic:baseline-plus" width={26} />

                <p className="text-base ">New game</p>
              </Button>
            </div>
          )}
          <div className="flex mb-2 absolute bottom-0 flex-col gap-2 w-full max-w-[480px] px-6 font-['Oooh_Baby'] justify-center items-center pt-4">
            {" "}
            <div className="flex flex-col justify-center items-center">
              <div className="text-2xl font-['Nunito_Sans'] font-bold text-[#0f002b]">
                {" "}
                LUDO KING{" "}
              </div>{" "}
              <div className=" text-xl text-[#0f002b] -mt-2"> punch line</div>
            </div>
            <div className="flex justify-between font-['Inter'] items-start w-full ">
              {" "}
              <div
                onClick={() => navigate("/terms")}
                className="cursor-pointer  text-center text-xs font-medium"
              >
                {" "}
                Terms of Service{" "}
              </div>{" "}
              <div className="text-center text-xs font-bold">·</div>
              <div
                onClick={() => navigate("/privacy")}
                className=" cursor-pointer text-center text-xs font-medium"
              >
                Privacy Policy
              </div>{" "}
              <div className="text-center text-xs font-bold">·</div>
              <div
                onClick={() => navigate("/content")}
                className="text-center cursor-pointer text-xs font-medium"
              >
                Content Policies
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
