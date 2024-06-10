import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HelpButton from "../MainLayout/HelpButton";
import { fetchAllReferrals } from "./referralsSlice";
import { Avatar, Card, Typography } from "@material-tailwind/react";
import { formatDate } from "../admin_and_S.admin/Functions/formateDate";

const ReferralList = ({ setIslist, users, handleRecentCardCLick }) => {
  const dispatch = useDispatch();
  const { allReferrals, status, error } = useSelector(
    (state) => state.referrals
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllReferrals());
    }
  }, [status, dispatch]);
  console.log(allReferrals);
  return (
    <div className="relative h-full min-h-screen">
      <div className="text-white py-2 px-4 flex font-bold text-[20px] items-center justify-between">
        <div className="gap-2 flex items-center">
          <Icon
            onClick={() => setIslist(false)}
            icon="mingcute:arrow-left-line"
            width="32"
            className="cursor-pointer"
          />
          <p>
            referral <b>history</b>
          </p>
        </div>
        <HelpButton />
      </div>
      <div className="flex mb-4 flex-col h-full overflow-scroll gap-3 w-full items-center ">
        {(!allReferrals || allReferrals?.length === 0) && (
          <p className="mt-6 text-white font-semibold text-3xl w-full flex justify-center">
            No Reffered user...
          </p>
        )}

        {allReferrals?.length > 0 &&
          allReferrals?.map((referuser) => {
            return (
              <Card
                key={referuser._id}
                color="transparent"
                className="w-[90%] mt-5 max-w-[26rem] bg-gray-100 hover:bg-gray-200 p-3 mx-4 rounded-2xl"
              >
                <div className="flex items-center gap-4">
                  <Avatar
                    size="lg"
                    variant="circular"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    alt="tania andrew"
                  />
                  <div className="flex w-full flex-col gap-0.5">
                    <div className="flex items-center justify-between">
                      <Typography variant="h5" className="truncate">
                        {referuser?.userName || referuser?._id.slice(-6)}
                      </Typography>
                      <div className="text-sm flex items-center gap-0">
                        Joined on
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Typography className="flex items-center gap-1">
                        <Icon icon="mdi:tick-circle-outline" />
                        Let’s play again
                      </Typography>
                      <div className="flex gap-1">
                        {formatDate(referuser?.createdAt)}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default ReferralList;
