import React, { useEffect, useState } from "react";
import { SidebarMob } from "../MainLayout/SidebarMob";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import LiveBattles from "../../assets/new_game/livebattle.svg";
import { useNavigate } from "react-router-dom";
import TopbarMobile from "../MainLayout/TopbarMobile";


const HelpPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen h-full bg-white">
      <TopbarMobile />
      <div className="bg-white w-full pt-20">
        <div className="flex justify-between items-center px-4 py-2 w-full">
          <div className="flex gap-5 items-center">
            <img
              onClick={() => navigate("/")}
              src="https://file.rendit.io/n/Bh3TjQUvsgxuYLevIVW7.svg"
              alt="HardwareKeyboardBackspace icon"
              id="Epback"
              className="w-6"
            />
            <div
              id="LiveBattle13"
              className="text-center text-xl font-['Inter'] text-[#0f002b]"
            >
              Help : <span className="font-bold">Page Name</span>
            </div>
          </div>
        </div> 
      </div>

      {/* <Drawer
        placement="bottom"
        open={openBottom}
        onClose={closeDrawerBottom}
        className="p-4  bg-[#0f002b] rounded-t-3xl"
      >
        {isRequest == false ? (
          <div className="flex flex-col p-4">
            <div className="mb-4 flex items-center w-full justify-center gap-2">
              <div className="bg-white w-[120px] h-[120px] rounded-full relative">
                <div className="text-[#00C300] bold absolute top-8 left-5 text-6xl">
                  45
                </div>
              </div>
            </div>
            <Typography
              color="white"
              className=" pr-4 flex justify-center text-xl font-bold"
            >
              Requesting...
            </Typography>
          </div>
        ) : (
          <div>
            <div className="flex justify-center gap-6 mt-10 w-full">
              <Button
                onClick={closeDrawerBottom}
                className="bg-[#0f002b] text-white text-lg font-extrabold  border border-gray-600  rounded-md"
              >
                Reject
              </Button>
              <Button
                onClick={() => navigate("/chat")}
                className="bg-white text-[#0f002b] text-lg font-extrabold border border-white "
              >
                Start
              </Button>
            </div>
            <Typography
              color="gray"
              className=" mt-12 pr-4 flex justify-center font-normal"
            >
              Reject will delete this open challenges from list
            </Typography>
          </div>
        )}
      </Drawer> */}


    </div>
  )
}

export default HelpPage