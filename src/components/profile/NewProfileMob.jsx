import React, { useEffect, useState } from "react";
import ProfileEditbtn from "../../assets/profile/editbutton.svg";
import Edit from "../../assets/profile/edit.svg";
import LogOutMob from "../../assets/profile/respon_logout.svg";
import Verify from "../../assets/profile/verify.svg";
import { SidebarMob } from "../MainLayout/SidebarMob";
import { Drawer, Switch, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  logoutAsync,
  selectRefreshToken,
  selectToken,
} from "../app_start/authSlice";
import { fetchUserDetail } from "../live_battle/userSlice";
import { Icon } from "@iconify-icon/react";
import { toast } from "react-toastify";
import axios from "axios";
import LudoMainLogo from "../MainLayout/LudoMainLogo";
import PageLoader from "../MainLayout/PageLoader";

const NewProfileMob = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openBottom, setOpenBottom] = useState(true);
  const [aadharFront, setAadharFront] = useState(null);
  const [aadharBack, setAadharBack] = useState(null);
  const [aadharNumber, setAadharNumber] = useState("");
  const [kycStatus, setKycStatus] = useState("Not Uploaded");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [scrollPosition, setScrollPosition] = useState(0);
  const users = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);
  const { accessToken, refreshToken } = useSelector((state) => state.auth);
  // const [isChecked, setIsChecked] = useState(false);

 

  // const toggleCheckbox = () => {
  //   setIsChecked((prevState) => !prevState);
  // };
  const openDrawerBottom = () => setOpenBottom(true);
  const closeDrawerBottom = () => setOpenBottom(false);

  useEffect(() => {
    dispatch(fetchUserDetail());
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // for aadhar front and back photo
  const handleAadharFrontUpload = (e) => {
    const file = e.target.files[0];
    setAadharFront(file);
    // setAadharFront(URL.createObjectURL(e.target.files[0]));
  };

  const handleAadharBackUpload = (e) => {
    const file = e.target.files[0];
    setAadharBack(file);
    // setAadharBack(URL.createObjectURL(e.target.files[0]));
  };
  function validateAadhar(aadharNumber) {
    // Regex pattern for Aadhar number
    const aadharPattern = /^\d{12}$/;
    // Check if the input matches the Aadhar pattern
    return aadharPattern.test(aadharNumber);
  }
  const handleSubmit = async () => {
    if (!validateAadhar(aadharNumber)) {
      toast.error("Please Enter Valid Aadhar number");
      return;
    }
    if (!aadharFront || !aadharBack) {
      toast.error("Please upload both Aadharcard front and back images.");
      return;
    } else {
      const obj ={
        "aadharno.":aadharNumber,
        "image":[aadharFront,aadharBack]
      }
      console.log(obj)
      // const formData = new FormData();
      // formData.append("aadharNo", aadharNumber);
      // formData.append("aadharFront", aadharFront); 
      // formData.append("aadharBack", aadharBack); 

      // console.log(formData);

      try {
        const response = await axios.post("/api/user/addKycdetail", obj, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log(response.data); // Handle the response from the server as needed
      } catch (error) {
        console.error("Error:", error);
      }
      setKycStatus("Complete");
      closeDrawerBottom();
      // You can add additional logic here for submitting the images
    }
  };
  const handleLogout = () => {
    dispatch(logoutAsync({ accessToken, refreshToken }));
  };
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  if(!users) return <PageLoader/>
  return (
    <div className="max-w-[480px] w-full min-h-screen h-full">
      <div
        id="NotificationspaceRoot"
        className="bg-[#fead3a]  h-8 overflow-hidden"
      />
      <div className="bg-[#fead3a]  flex justify-between items-center w-full   h-[51px]  px-4">
        <div className="flex flex-row gap-3 items-start mt-3">
          <SidebarMob />
         
          <LudoMainLogo/>
        </div>
        <div
          onClick={handleLogout}
          className={`flex  h-9 my-1 px-3 justify-center items-center border-solid border border-[rgba(15,_0,_43,_0.3)] bg-[rgba(15,_0,_43,_0.3)] rounded-2xl ${
            scrollPosition > 10 ? "hidden" : "flex"
          }`}
        >
          <img src={LogOutMob} alt="Frame1" className=" w-[20px] h-[20px]" />
        </div>
      </div>

      <div className="bg-[#0f002b] w-full min-h-screen overflow-hidden relative">
        <div className="bg-[#fead3a] h-80 w-[160%] rounded-[50%]   -top-20 absolute -left-[30%]" />
        <div
          onClick={() => setScrollPosition(0)}
          className={`flex ${
            scrollPosition > 10 ? "relative px-3 pt-2" : "hidden"
          }`}
        ></div>
        <div
          className={`w-full relative mt-6  flex ${
            scrollPosition > 10 ? "flex-row items-center  " : "flex-col"
          }`}
        >
          <div
            className={`${
              scrollPosition > 10 ? "flex gap-4 ml-4" : "w-full"
            } m-auto relative `}
          >
            <div
              className={`${
                scrollPosition > 10 ? "" : "w-full"
              } flex justify-center items-center`}
            >
              <img
                className={`${
                  scrollPosition > 10 ? "w-16 " : "w-48"
                } relative  rounded-full`}
                src="https://images.unsplash.com/photo-1529524987368-af489318987c?q=80&w=582&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <img
                onClick={() => navigate("/editprofile")}
                className={`absolute  ${
                  scrollPosition > 10 ? "hidden " : "top-0 right-[30%]"
                }`}
                alt="editbtn"
                src={ProfileEditbtn}
              />
            </div>

            <div
              className={`flex  flex-col m-auto items-center font-bold ${
                scrollPosition > 10 ? "pt-0" : "pt-10 text-white"
              }`}
            >
              <div className="flex  w-full gap-2 items-center justify-center">
                <span
                  className={`text-center text-3xl ${
                    scrollPosition > 10 ? "text-xl" : ""
                  }`}
                >
                  Ludo Player
                </span>
                <img
                  className={`${scrollPosition > 10 ? "hidden " : ""} mt-2 w-6`}
                  src={Verify}
                  alt="Iconparkoutlinesuccess"
                />
              </div>
              <div
                className={`text-center text-3xl ${
                  scrollPosition > 10 ? "text-base" : " text-xl"
                }`}
              >
                @ludoplayer
              </div>
            </div>
          </div>

          {/* <label className={`${scrollPosition > 10 ? "pr-10" : "hidden"}`}>
            <input
              type="checkbox"
              className="hidden"
              checked={isChecked}
              onChange={toggleCheckbox}
            />
            <div
              className={`w-[76px] rounded-full shadow-lg cursor-pointer text-white font-bold text-sm ${
                isChecked ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {!isChecked ? (
                <div className="flex  transition-all ease-in-out gap-1 items-center justify-center pr-2">
                  <div className="bg-white  rounded-full flex items-center justify-center p-1">
                    <Icon
                      icon="material-symbols:error-outline"
                      style={{ color: "green" }}
                      width={24}
                    />
                  </div>
                  <p> KYC</p>
                </div>
              ) : (
                <div className="flex transition-all ease-in-out items-center justify-center gap-1 pl-2">
                  <p> KYC</p>
                  <div className="bg-white rounded-full flex items-center justify-center p-1">
                    <Icon
                      icon="charm:circle-tick"
                      style={{ color: "green" }}
                      width={24}
                    />
                  </div>
                </div>
              )}
            </div>
          </label> */}
        </div>

        <div className="mt-10 flex flex-col gap-3 w-full font-['Nunito_Sans'] items-start relative text-white font-bold">
          <div className="bg-[#0f002b] text-white flex flex-col justify-center gap-10 w-full items-start pt-5 pb-6 px-8">
            <div className="flex  justify-between w-full items-center">
              <div className="text-xl font-bold text-white">Basic Details</div>
              <img
                src={Edit}
                alt="Materialsymbolseditoutline1"
                className="ml-20 w-5"
              />
            </div>
            <div className="flex flex-col justify-between gap-6 w-5/6 items-start ">
              <div className="flex flex-row justify-between ml-4 w-full items-start">
                <div className="text-sm  mt-px">Phone no. :</div>
                <span>{users?.mobileNo}</span>
              </div>
              <div className="flex flex-row justify-between ml-4 w-full items-start">
                <div className="text-sm mt-px">User Id :</div>
                <span>{users?._id?.slice(-6)}</span>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-6 w-5/6 items-start">
              <div className="text-xl font-bold text-white">Kyc</div>
              <div className="flex flex-row justify-between ml-4 w-full items-start">
                <div className="text-sm text-white mt-px">Kyc :</div>

                {/* <Switch color="amber" className="bg-brown-800" /> */}

                <label>
                  <input
                    type="checkbox"
                    className="hidden"
                    // checked={isChecked}
                    // onChange={openDrawerBottom}
                  />
                  <div
                    className={`w-[56px] rounded-full shadow-lg cursor-pointer text-white font-bold text-sm ${
                      users?.userKyc?.verificationStatus
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {!users?.userKyc?.verificationStatus ? (
                      <div className="flex  transition-all ease-in-out gap-1 items-center justify-center pr-2">
                        <div className="bg-white  rounded-full flex items-center justify-center p-1">
                          <Icon
                            icon="material-symbols:error-outline"
                            style={{ color: "green" }}
                            width={16}
                          />
                        </div>
                        <p className="text-xs"> KYC</p>
                      </div>
                    ) : (
                      <div className="flex transition-all ease-in-out items-center justify-center gap-1 pl-2">
                        <p className="text-xs"> KYC</p>
                        <div className="bg-white rounded-full flex items-center justify-center p-1">
                          <Icon
                            icon="charm:circle-tick"
                            style={{ color: "green" }}
                            width={16}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </label>
              </div>
            </div>
            {/* <div className="flex flex-col justify-between gap-6 w-5/6 items-start">
              <div className="text-xl font-bold text-white">
                Notification Preference
              </div>
              <div className="flex flex-row justify-between ml-4 w-full items-start">
                <div className="text-sm text-white mt-px">Email :</div>
                <Switch color="amber" className="bg-brown-800" />
              </div>
              <div className="flex flex-row justify-between ml-4 w-full items-start">
                <div id="Push" className="text-sm text-white mt-px">
                  Push :
                </div>
                <Switch color="amber" className="bg-brown-800" />
              </div>
              <div className="flex flex-row justify-between ml-4 w-full items-start">
                <div id="Push" className="text-sm text-white mt-px">
                  Phone No. :
                </div>
                <Switch color="amber" className="bg-brown-800" />
              </div>
            </div> */}

            {/* <div className="flex flex-col justify-between gap-6 w-5/6 items-start">
              <div className="text-xl font-bold text-white">App Preference</div>
              <div className="flex flex-row justify-between ml-4 w-full items-start">
                <div className="text-sm text-white mt-px">Theme :</div>
                <Switch color="amber" className="bg-brown-800" />
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <Drawer
        placement="bottom"
        // open={!users?.userKyc?.verificationStatus}
        open={openBottom}
        onClose={closeDrawerBottom}
        className="w-[480px] p-4  bg-[#0F002B] rounded-t-3xl"
      >
        <div className="p-2  max-w-sm mx-auto rounded-xl shadow-md flex flex-col items-center gap-2">
          <div className="text-white  font-bold flex items-center gap-2 bg-[#FF0000] pl-2 pr-0 rounded-3xl">
            <p className="text-xs"> KYC Status: {kycStatus}</p>
            <div className="bg-white rounded-full w-5 h-5 flex justify-center items-center">
              <Icon
                icon="material-symbols:info-outline"
                style={{ color: "#0F002B" }}
              />
            </div>
          </div>
          {kycStatus === "Not Uploaded" && (
            <div className="flex flex-col gap-2 w-[60%]">
              <input
                type="text"
                value={aadharNumber}
                onChange={(e) => setAadharNumber(e.target.value)}
                placeholder="Enter Aadhaar Number"
                className="font-bold  cursor-pointer bg-white bg-opacity-[30%]  text-white py-2 px-4 rounded-lg"
              />
              <label className="font-bold text-center cursor-pointer bg-white bg-opacity-[30%] hover:bg-opacity-[50%] text-white py-2 px-4 rounded-lg">
                Aadhar Front
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleAadharFrontUpload}
                />
              </label>
              <label className="cursor-pointer  text-center font-bold bg-white bg-opacity-[30%] hover:bg-opacity-[50%] text-white py-2 px-4 rounded-lg">
                Aadhar Back
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleAadharBackUpload}
                />
              </label>
              <button
                className="bg-gray-50 hover:bg-gray-100 text-[#0F002B] py-2 px-4 rounded-lg"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          )}
        </div>
        <Typography
          color="gray"
          className="mb-4 text-[14px] font-[Inter] mt-2 px-9 flex justify-center font-normal"
        >
          Make sure that you upload the correct image. This will be used in
          future for reference in case of any issues.
        </Typography>
      </Drawer>
    </div>
  );
};

export default NewProfileMob;
