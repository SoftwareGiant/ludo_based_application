import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopbarMobile from "../MainLayout/TopbarMobile";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { IconButton } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetail } from "./userSlice";

const HelpPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(fetchUserDetail());
  }, [dispatch]);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen h-full w-full max-w-[480px] bg-white">
      <TopbarMobile users={users} />
      <div className="bg-white w-full pt-20">
        <div className="flex justify-between items-center px-4 py-2 w-full">
          <div className="flex gap-5 items-center">
            <IconButton
              variant="text"
              color="blue-gray"
              onClick={() => navigate("/")}
            >
              <Icon
                icon="mingcute:arrow-left-line"
                className="text-black"
                width="30"
              />
            </IconButton>
            <div
              id="LiveBattle13"
              className="text-center text-xl font-['Inter'] text-[#0f002b]"
            >
              Help : <b>Page Name</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
