import React, { useState } from "react";
import { Icon } from "@iconify-icon/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllKyc } from "../AdminSlice/AllKycSlice";
import { toast } from "react-toastify";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import { formatDate } from "../../Functions/formateDate.js";
import axios from "axios";

const DepositeStatusCard = ({ val, RefreshDepositeReq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { accessToken, refreshToken } = useSelector((state) => state.auth);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    if (val.status !== "pending") return;
    setOpen(!open);
  };

  async function verifyDeposit(data) {
    try {
      const depositeData = {
        amount: val.amount,
        utrNo: val?._id,
        userId: val?.user,
      };
      const response = await axios.post(
        "/api/payment/deposit/verification",
        depositeData,
        {
          headers: {
            Authorization: `bearer ${accessToken}`,
          },
        }
      );
      console.log("Response:", response.data);
      toast.success(response.data.message);
      RefreshDepositeReq();
      handleOpen(); //   return response.data;
    } catch (error) {
      handleOpen();
      console.error(
        "Error verifying deposit:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  }

  return (
    <div className="flex gap-3 mb-3">
      <div
        onClick={openModal}
        className={`ml-4 cursor-pointer rounded-xl flex justify-center items-center w-[87px] h-[19px] ${
          val.status === "success"
            ? "bg-[#00C300] text-[#FFFFFF] "
            : val.status === "failed"
            ? "bg-[#FF0000] text-[#FFFFFF] "
            : "bg-gray-400 text-[#FFFFFF]"
        }`}
      >
        <Typography className="font-[Inter] font-normal text-[10px]  ">
          {val.status}
        </Typography>
      </div>

      {isOpen && (
        <div className="rounded-md fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute  inset-0 bg-black opacity-50"></div>
          <div className="bg-white w-[826px] rounded-md shadow-lg z-50">
            <div className="flex px-2 items-center rounded-t-md bg-[#EEEEEE] w-full h-[80px] justify-between">
              <div className="flex items-center gap-2 font-bold font-sans text-[#000000]">
                <div className="p-1 gap-2 h-[32px] bg-[#F4F4F4] flex items-center justify-between border rounded-lg">
                  <Icon icon="pajamas:status" width="24" />
                  <span>User Details</span>{" "}
                </div>
                <div
                  className={`text-white ${
                    val.status === "success"
                      ? "bg-[#00C300] text-[#FFFFFF] "
                      : val.status === "failed"
                      ? "bg-[#FF0000] text-[#FFFFFF] "
                      : "bg-gray-400 text-[#FFFFFF]"
                  }  px-2 p-1 rounded-md flex items-center text-[19.2px]`}
                >
                  {val.status}
                </div>
                <div>UID {val?.user?.slice(-7)}</div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={closeModal}
                  className="bg-[#F4F4F4] hover:bg-blue-gray-100 text-white font-bold p-2 rounded-full w-[48px] h-[38.4px]"
                >
                  <Icon icon="charm:cross" className="text-black" width="24" />
                </button>
              </div>
            </div>

            <div className="w-full h-[465px] flex ">
              <div className="flex-1 p-4">
                <div className="w-full flex items-start justify-start">
                  <div className="flex items-center gap-2   text-[#0F002B]  font-[Nunito-Sans]">
                    <img
                      alt="user"
                      className="w-[97.3px] h-[97.3px] rounded-full"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    />

                    <span className="font-normal text-[20px]">@ludoplayer</span>
                  </div>

                  <div className="flex flex-col  justify-center items-center m-auto text-[#0F002B]  font-[Nunito-Sans]">
                    <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[52px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                      <b>Transaction Id</b>
                      <span>{val._id}</span>
                    </div>
                    <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[52px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                      <b>Amount</b>
                      {val.amount}
                    </div>
                    <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[52px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                      <p>
                        {" "}
                        <b>Time </b> (initiated)
                      </p>

                      {formatDate(val.timestamp)}
                    </div>
                    <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[52px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                      <b>Image</b>
                      <button className="flex p-2  items-center gap-2">
                        View
                        <Icon icon="basil:document-outline" width="24" />
                      </button>
                    </div>
                    <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[52px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                      <b>Status</b>
                      <button
                        onClick={handleOpen}
                        className="flex p-2 rounded-lg bg-blue-gray-100 hover:bg-blue-gray-200 items-center gap-2"
                      >
                        {val.status}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Are you sure want to Confirm ?</DialogHeader>
        <DialogBody>Once confirm can`t be undone.</DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            className="bg-[#212142]"
            onClick={verifyDeposit}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default DepositeStatusCard;
