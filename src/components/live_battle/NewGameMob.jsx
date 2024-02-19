import React, { useEffect, useState } from "react";
import "../../App.css";
import Copy from "../../assets/new_game/copy.svg";
import Share from "../../assets/new_game/share.svg";
import Fb from "../../assets/new_game/fb.svg";
import Wp from "../../assets/new_game/wp.svg";
import Twtr from "../../assets/new_game/twtr.svg";
import LiveBattle from "../../assets/new_game/livebattle.svg";
import DropIcon from "../../assets/new_game/dropdown.svg";
import ElpAct from "../../assets/new_game/EllipseActive.svg";
import Elp from "../../assets/new_game/Ellipse.svg";
import Prfl from "../../assets/new_game/ludo-indian.png";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import HamBurger from "../../assets/profile/hamburger.svg";
import back from "../../assets/profile/ep_back.svg";
import { SidebarMob } from "../MainLayout/SidebarMob";
import NewGameSLider from "./NewGameSLider";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Drawer,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import ButtonLoader from "../MainLayout/ButtonLoader";
import axios from "axios";

const NewGameMob = () => {
  const navigate = useNavigate();
  const [battleAmount, setBattleAmount] = useState("");
  const [buttonStatus, setButtonStatus] = useState("create");
  const [openBottom, setOpenBottom] = useState(false);
  const openDrawerBottom = () => setOpenBottom(true);
  const closeDrawerBottom = () => setOpenBottom(false);
  useEffect(() => {
    axios
      .post("http://localhost:8003/api/user/register", {
        mobileNo: "7610981931",
      })
      .then((res) => console.log(res))
      .then((data) => {
        // Handle the response data
        console.log(data);
      })
      .catch((error) => {
        // Handle errors
        console.error("There was a problem with your fetch operation:", error);
      });
  }, []);

  const handleCreate = () => {
    if (battleAmount === "") {
      alert("fill battle amount");
      return;
    }
    setButtonStatus("loading");
    setTimeout(() => {
      setButtonStatus("success");
    }, 2000);
  };
  return (
    <div className="max-w-[480px] w-full min-h-screen h-full">
      <div
        id="NotificationspaceRoot"
        className="bg-[#fead3a]  h-8 overflow-hidden"
      />
      <div className="bg-[#fead3a]  flex justify-between items-center w-full   h-[51px]  px-4">
        <div className="flex flex-row gap-3 items-start mt-3">
          <SidebarMob />
          <div className="flex flex-col text-[#0f002b] ">
            <div className="  text-base font-['Nunito_Sans'] font-extrabold ">
              LUDO KING
            </div>

            <div className="text-center text-base font-['Oooh_Baby'] font-normal  -mt-2">
              punch line
            </div>
          </div>
        </div>
        <img
          onClick={() => navigate("/profile")}
          src={FrameProfile}
          alt="Frame1"
          className="w-[30px] h-[30px] mt-[9.5px] rounded-[100px] border border-solid border-white "
        />
      </div>

      <div className="bg-[#0f002b] w-full min-h-screen overflow-hidden relative">
        <div className="bg-[#fead3a] h-80 w-[650px] rounded-[50%]   -top-20 absolute -left-24" />
        <div className="py-4">
          <NewGameSLider />
        </div>
        <div className="m-6 relative">
          <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white relative w-full  max-w-screen  flex flex-col gap-6 items-start rounded-lg p-2 pb-8">
            <div className="text-center text-xl font-['Inter'] text-[#0f002b] ml-6  top-5">
              live <span className="font-bold">battle</span>
            </div>
            <div className="p-2 flex flex-col  gap-4 m-auto w-full">
              <div className="inline-flex flex-col justify-between w-full min-h-[168px] items-center border rounded-[10px] shadow-[0px_0px_40px_6px_rgba(0,_0,_0,_0.25)] bg-white border-solid border-[rgba(15,_0,_43,_0.2)]">
                <div className="font-['Inter'] text-[#0f002b] w-full py-2 px-4 flex flex-col justify-start">
                  <div className="italic">
                    open challenge from
                    <span className="font-extrabold pl-1">ravan3p</span>
                  </div>
                  <div className="italic font-semibold ">· 2 minutes ago</div>
                </div>
                <div className="bg-[#fca837] shadow-[inset_0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] rounded-br-md rounded-bl-md  flex  gap-16  items-center justify-between w-full m-3 p-6 mb-0">
                  <div className="flex flex-col w-1/2 text-4 font-['Inter'] text-white font-extrabold">
                    <div className="flex justify-between ">
                      <span>Entry fee</span>
                      <span> ₹40</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Prize</span>
                      <span> ₹80</span>
                    </div>
                  </div>

                  <div className=" flex w-[25.5px] h-[25.5px] items-center justify-center p-[6.67px] rounded-[19.421px] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b]">
                    <img
                      src={LiveBattle}
                      alt="Arcticonsbattleforwesnoth"
                      className="w-4"
                    />
                  </div>
                </div>
              </div>

              <div className="inline-flex flex-col justify-between w-full min-h-[168px] items-center border rounded-[10px] shadow-[0px_0px_40px_6px_rgba(0,_0,_0,_0.25)] bg-white border-solid border-[rgba(15,_0,_43,_0.2)]">
                <div className="font-['Inter'] text-[#0f002b] w-full py-2 px-4 flex flex-col justify-start">
                  <div className="italic">
                    open challenge from
                    <span className="font-extrabold pl-1">ravan3p</span>
                  </div>
                  <div className="italic font-semibold ">· 2 minutes ago</div>
                </div>
                <div className="bg-[#fca837] shadow-[inset_0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] rounded-br-md rounded-bl-md  flex  gap-16  items-center justify-between w-full m-3 p-6 mb-0">
                  <div className="flex flex-col w-1/2 text-4 font-['Inter'] text-white font-extrabold">
                    <div className="flex justify-between ">
                      <span>Entry fee</span>
                      <span> ₹40</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Prize</span>
                      <span> ₹80</span>
                    </div>
                  </div>

                  <div className=" flex w-[25.5px] h-[25.5px] items-center justify-center p-[6.67px] rounded-[19.421px] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b]">
                    <img
                      src={LiveBattle}
                      alt="Arcticonsbattleforwesnoth"
                      className="w-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => navigate("/LiveBattle")}
            className="shadow-[0px_0px_4px_1px_rgba(0,_0,_0,_0.25)] bg-white  flex flex-row justify-center -mt-6 relative ml-[42%] pt-2 w-12 h-12 items-start rounded-[24px]"
          >
            <img
              src="https://file.rendit.io/n/PZF2SOJvNd8p90uk3rGr.svg"
              alt="HardwareKeyboardArrowDown icon"
              id="Phcaretdown"
              className="w-6 mt-1"
            />
          </div>
        </div>

        <div className="relative m-6">
          <div className="hadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#fead3a] flex flex-col p-4 gap-6 w-fullw-full  max-w-screen items-start rounded-lg pb-8">
            <div
              id="StartYourOwnBattle1"
              className="text-xl font-['Inter'] text-[#0f002b]"
            >
              start your own <span className="font-bold">battle</span>
            </div>
            <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex justify-between  w-full items-center px-4 py-2 rounded-lg">
              <div className="flex" onClick={openDrawerBottom}>
                <span>₹</span>
                <input
                  placeholder="Your battle amount"
                  className="outline-none pl-2  focus:outline-none w-full"
                />
              </div>

              <Drawer
                placement="bottom"
                open={openBottom}
                onClose={closeDrawerBottom}
                className="p-4  bg-[#fead3a] rounded-t-3xl"
              >
                <div className="mb-4 flex items-center justify-start gap-2">
                  <IconButton
                    variant="text"
                    color="blue-gray"
                    onClick={closeDrawerBottom}
                  >
                    <img src={back} />
                  </IconButton>
                  <Typography variant="h5" color="white">
                    Enter Battle Amount
                  </Typography>
                </div>
                <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex justify-between  w-full items-center px-4 py-2 rounded-lg">
                  <div className="flex" onClick={openDrawerBottom}>
                    <span>₹</span>
                    <input
                      val={battleAmount}
                      onChange={(e) => setBattleAmount(e.target.value)}
                      placeholder="Your battle amount"
                      className="outline-none pl-2  focus:outline-none w-full"
                    />
                  </div>
                  <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.4)] bg-[#fead3a] flex rounded-full p-2">
                    <img
                      src="https://file.rendit.io/n/oR12vSMymgw9l2fo50rk.svg"
                      alt="Arcticonsbattleforwesnoth2"
                      className="w-6"
                    />
                  </div>
                </div>

                <Typography
                  color="gray"
                  className="mb-4 mt-12 pr-4 flex justify-center font-normal"
                >
                  You are creating a new open battle
                </Typography>
                <div className="flex justify-center w-full">
                  {buttonStatus === "success" ? (
                    <Button
                      onClick={closeDrawerBottom}
                      className="bg-white text-[#0f002b] text-lg font-extrabold w-4/5"
                    >
                      Success
                    </Button>
                  ) : buttonStatus === "loading" ? (
                    <Button
                      className="bg-white text-[#0f002b] text-lg font-extrabold w-4/5 "
                      disabled
                    >
                      <ButtonLoader />
                    </Button>
                  ) : (
                    <Button
                      className="bg-white text-[#0f002b] text-lg font-extrabold w-4/5 "
                      onClick={handleCreate}
                    >
                      Create!
                    </Button>
                  )}
                </div>
              </Drawer>

              <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.4)] bg-[#fead3a] flex rounded-full p-2">
                <img
                  src="https://file.rendit.io/n/oR12vSMymgw9l2fo50rk.svg"
                  alt="Arcticonsbattleforwesnoth2"
                  className="w-6"
                />
              </div>
            </div>
            <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex justify-between w-full items-center px-4 py-2 rounded-lg">
              <img
                src="https://file.rendit.io/n/5PdA4wmMt9GMBxV6CW6P.svg"
                alt="Logoswhatsappicon"
                id="Logoswhatsappicon"
                className="w-8"
              />
              <img
                src="https://file.rendit.io/n/55XD5jWezeMUMD482SOu.svg"
                alt="Logosfacebook"
                id="Logosfacebook"
                className=" w-8"
              />

              <img
                src="https://file.rendit.io/n/xkOX2mj2hPIoROecNSu8.svg"
                alt="Ritwitterxfill"
                id="Ritwitterxfill"
                className="w-7"
              />

              <img
                src="https://file.rendit.io/n/8hRbplCBTS8XBc5b8CmV.svg"
                alt="ActionLabelOutline icon"
                id="Solarcopylinear"
                className="w-7"
              />

              <img
                src="https://file.rendit.io/n/SF3ew7gbHLPpUywDhwmw.svg"
                alt="Mdishare"
                id="Mdishare"
                className=" w-8"
              />
            </div>
            <div className="flex items-center justify-center w-full m-auto">
              <img
                src="https://file.rendit.io/n/KPwS2RCsAs5e6sLj4eAj.svg"
                alt="Line"
                id="Line"
                className="w-24"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewGameMob;
