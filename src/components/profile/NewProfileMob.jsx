import React, { useEffect, useState } from "react";
import LogOutMob from "../../assets/profile/respon_logout.svg";
import Verify from "../../assets/profile/verify.svg";
import { SidebarMob } from "../MainLayout/SidebarMob";
import { Drawer, IconButton, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAsync } from "../app_start/authSlice";
import { fetchUserDetail } from "../live_battle/userSlice";
import { Icon } from "@iconify-icon/react";
import { toast } from "react-toastify";
import axios from "axios";
import LudoMainLogo from "../MainLayout/LudoMainLogo";
import PageLoader from "../MainLayout/PageLoader";
import TotoalBal from "../MainLayout/ProfileButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const validationSchema = Yup.object({
  aadharNumber: Yup.string()
    .matches(/^\d{12}$/, "*Aadhar number must be exactly 12 digits")
    .required("*Aadhar number is required"),
  aadharFront: Yup.mixed().required("*required"),
  aadharBack: Yup.mixed().required("*required"),
});
const NewProfileMob = () => {
  const [aadharFront, setAadharFront] = useState(null);
  const [aadharBack, setAadharBack] = useState(null);
  const [aadharfrontname, setaadharfrontName] = useState("");
  const [aadharbackname, setaadharbackName] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [scrollPosition, setScrollPosition] = useState(0);
  const users = useSelector((state) => state.user.user);
  const [isUserNameEdit, setIsUserNameEdit] = useState(false);
  const [userName, setUserName] = useState(users?.userName || "");

  console.log(users);
  const [openBottom, setOpenBottom] = useState(
    users?.userKyc?.verificationStatus === "pending" ? true : false
  );

  const { accessToken, refreshToken } = useSelector((state) => state.auth);
  const openDrawerBottom = () => {
    if (users?.userKyc?.verificationStatus === "approved") {
      return;
    } else setOpenBottom(true);
  };
  const closeDrawerBottom = () => setOpenBottom(false);

  useEffect(() => {
    dispatch(fetchUserDetail());
    users?.userName && setUserName(users?.userName);
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

  const handleSubmit = async (values, { setSubmitting }) => {
    if (!values.aadharFront || !values.aadharBack) {
      toast.error("Please upload both Aadhar front and back images.");
      setSubmitting(false);
      return;
    }

    const formData = new FormData();
    formData.append("aadharNo", values.aadharNumber); // Append aadharNumber as a form field
    formData.append("image", values.aadharFront); // Append aadharFront as a file
    formData.append("image", values.aadharBack); // Append aadharBack as a file

    try {
      const response = await axios.post("/api/user/addKycdetail", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`, // Ensure the correct capitalization for "Bearer"
        },
      });
      toast.success(response.data.message);
      dispatch(fetchUserDetail());
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while submitting the form.");
    }

    setSubmitting(false);
    closeDrawerBottom();
  };

  const addUserName = async (username) => {
    if (!username) {
      toast.error("Please Enter a Valid Username");
      return;
    }
    try {
      const name = { userName: username };
      const response = await axios.post("/api/user/addusername", name, {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Ensure the correct capitalization for "Bearer"
        },
      });

      toast.success("usename updated successfully");
      setIsUserNameEdit((prevState) => !prevState);
      dispatch(fetchUserDetail());
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      console.error("Error adding username:", error);
      throw error;
    }
  };

  const handleLogout = () => {
    dispatch(logoutAsync({ token: accessToken, refreshtoken: refreshToken }));
  };

  const handleInputChange = (event) => {
    setUserName(event.target.value);
  };

  if (!users)
    return (
      <div className="max-w-[480px]">
        <PageLoader />{" "}
      </div>
    );

  return (
    <div className="max-w-[480px] w-full min-h-screen h-full">
      <div
        id="NotificationspaceRoot"
        className="bg-[#fead3a]  h-8 overflow-hidden"
      />
      <div className="bg-[#fead3a]  flex justify-between items-center w-full   h-[51px]  px-4">
        <div className="flex flex-row gap-3 items-start mt-3">
          <SidebarMob users={users} />
          <LudoMainLogo />
        </div>
        <div className="flex gap-2 items-center">
          <TotoalBal users={users} />
          <div
            onClick={handleLogout}
            className={`flex cursor-pointer  h-9 my-1 px-3 justify-center items-center border-solid border border-[rgba(15,_0,_43,_0.3)] bg-[rgba(15,_0,_43,_0.3)] rounded-2xl ${
              scrollPosition > 10 ? "hidden" : "flex"
            }`}
          >
            <img src={LogOutMob} alt="Frame1" className=" w-[20px] h-[20px]" />
          </div>
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
              <div
                className={`${
                  scrollPosition > 10 ? "w-16 h-16" : "h-48 w-48"
                } relative  rounded-full overflow-hidden`}
              >
                <img
                  className="absolute h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Cover"
                />
              </div>
              <Icon
                icon="mdi:pencil-outline"
                width={32}
                onClick={() => navigate("/editprofile")}
                className={`cursor-pointer text-[#0f002b] bg-white p-2 shadow-lg rounded-full transition duration-300 ease-in-out transform hover:scale-110  absolute  ${
                  scrollPosition > 10 ? "hidden " : "top-0 right-[30%]"
                }`}
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
                  {users.userName ? users.userName : "Ludo Player"}
                </span>
                {users?.userKyc?.verificationStatus === "approved" && (
                  <img
                    className={`${scrollPosition > 10 ? "hidden " : ""} w-6`}
                    src={Verify}
                    alt="Iconparkoutlinesuccess"
                  />
                )}
              </div>
              <div
                className={`text-center text-3xl ${
                  scrollPosition > 10 ? "text-base" : " text-xl"
                }`}
              >
                {users?._id?.slice(-6)}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 w-full font-['Nunito_Sans'] items-start relative text-white font-bold">
          <div className="bg-[#0f002b] text-white flex flex-col justify-center gap-6 w-full items-start pt-5 pb-6 px-8">
            <div className="flex  justify-between w-full items-center">
              <div className="text-xl font-bold text-white">Basic Details</div>
              {isUserNameEdit ? (
                <IconButton className="bg-transparent">
                  <Icon
                    icon="carbon:save"
                    onClick={() => addUserName(userName)}
                    width={32}
                    className="bg-transparent transition duration-300 ease-in-out transform hover:scale-110 hover:text-[#fead3a]"
                  />
                </IconButton>
              ) : (
                <IconButton className="bg-transparent">
                  <Icon
                    icon="mdi:pencil-outline"
                    onClick={() => setIsUserNameEdit(!isUserNameEdit)}
                    width={32}
                    className="bg-transparent transition duration-300 ease-in-out transform hover:scale-110 hover:text-[#fead3a]"
                  />
                </IconButton>
              )}
            </div>
            <div className="flex flex-col justify-between gap-5 w-5/6 items-start ">
              <div className="flex flex-row justify-between ml-4 w-full items-start">
                <div className="text-sm  mt-px">Phone no. :</div>
                <span>{users?.mobileNo}</span>
              </div>
              <div className="flex flex-row justify-between ml-4 w-full items-start">
                <div className="text-sm mt-px">User Id :</div>
                <span>{users?._id?.slice(-6)}</span>
              </div>
              {isUserNameEdit ? (
                <div className="flex flex-row justify-between ml-4 w-full items-start">
                  <div className="text-sm w-[50%] mt-px">User Name :</div>
                  <input
                    value={userName}
                    onChange={handleInputChange}
                    className="flex w-[60%] bg-transparent border-2 rounded-lg border-gray-300 focus:border-[#fead3a] px-2 py-1 focus:outline-none justify-end items-end transition duration-300 ease-in-out"
                  />
                </div>
              ) : (
                <div className="flex flex-row justify-between ml-4 w-full items-start">
                  <div className="text-sm mt-px">User Name :</div>
                  <span>
                    {users?.userName ? users?.userName : "ludo player"}
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-col justify-between gap-6 w-5/6 items-start">
              <div className="text-xl font-bold text-white">Kyc</div>
              <div className="flex flex-row justify-between ml-4 w-full items-start">
                <div className="text-sm text-white mt-px">Kyc :</div>
                <label>
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={users?.userKyc?.verificationStatus !== "approved"}
                    onChange={openDrawerBottom}
                  />
                  <div
                    className={`${
                      users?.userKyc?.verificationStatus === "pending"
                        ? "bg-[#FF0000]"
                        : users?.userKyc?.verificationStatus === "inprogress"
                        ? "bg-yellow-900"
                        : "bg-green-500"
                    }                   
                     rounded-full shadow-lg cursor-pointer text-white font-bold text-sm `}
                  >
                    {users?.userKyc?.verificationStatus !== "approved" ? (
                      <div className="flex  transition-all ease-in-out gap-1 items-center justify-center pr-2">
                        <div className="bg-white  rounded-full flex items-center justify-center p-1">
                          <Icon
                            icon="material-symbols:error-outline"
                            style={{ color: "green" }}
                            width={16}
                          />
                        </div>
                        <p className="text-xs">KYC</p>
                      </div>
                    ) : (
                      <div className="flex  transition-all ease-in-out gap-1 items-center justify-center pl-2">
                        <p className="text-xs">KYC</p>
                        <div className="bg-white  rounded-full flex items-center justify-center p-1">
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
          </div>
        </div>
      </div>

      {users?.userKyc?.verificationStatus !== "approved" && (
        <Drawer
          placement="bottom"
          open={openBottom}
          onClose={closeDrawerBottom}
          size={350}
          className="w-[480px] p-4   bg-[#0F002B] rounded-t-3xl"
        >
          <div className="p-2  max-w-sm mx-auto rounded-xl shadow-md flex flex-col items-center gap-2">
            <div
              className={`text-white  font-bold flex items-center gap-2 ${
                users?.userKyc?.verificationStatus === "pending"
                  ? "bg-[#FF0000]"
                  : "bg-yellow-900"
              } pl-2 pr-0 rounded-3xl`}
            >
              <p className="text-xs">
                {" "}
                KYC Status:{" "}
                {users?.userKyc?.verificationStatus === "pending"
                  ? "Pending"
                  : "inprogress"}
              </p>
              <div className="bg-white rounded-full w-5 h-5 flex justify-center items-center">
                <Icon
                  icon="material-symbols:info-outline"
                  style={{ color: "#0F002B" }}
                />
              </div>
            </div>
            {users?.userKyc?.verificationStatus === "inprogress" ? (
              ""
            ) : (
              <Formik
                initialValues={{
                  aadharNumber: "",
                  aadharFront: null,
                  aadharBack: null,
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ setFieldValue, isSubmitting, values }) => (
                  <Form className="flex flex-col gap-2 w-full">
                    <div className="flex flex-col">
                      <Field
                        name="aadharNumber"
                        type="text"
                        placeholder="Enter Aadhar Number"
                        className="font-bold cursor-pointer bg-white bg-opacity-[30%] bg-transparent border-2 border-gray-300 focus:border-[#fead3a] focus:outline-none text-white py-2 px-4 rounded-lg"
                      />
                      <ErrorMessage
                        name="aadharNumber"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="flex w-full gap-2">
                      <div className="flex flex-1  flex-col">
                        {values.aadharFront ? (
                          <div className="rounded-md flex-1 gap-2 bg-white bg-opacity-[60%] text-white flex justify-start items-center text-xs">
                            <IconButton
                              className="p-1 m-1 h-8 w-8"
                              onClick={() => setFieldValue("aadharFront", null)}
                            >
                              <Icon icon="charm:cross" width={32} />
                            </IconButton>
                            {values.aadharFront.name.slice(0, 20)}
                          </div>
                        ) : (
                          <label className="font-bold flex-1 text-center flex justify-center items-center gap-2 cursor-pointer bg-white bg-opacity-[30%] hover:bg-opacity-[50%] text-white py-2 px-4 rounded-lg">
                            <span>Aadhar Front</span>
                            <Icon icon="material-symbols:upload" width={24} />
                            <input
                              name="aadharFront"
                              type="file"
                              className="hidden"
                              accept=".jpeg, .jpg, .png"
                              onChange={(event) => {
                                setFieldValue(
                                  "aadharFront",
                                  event.currentTarget.files[0]
                                );
                              }}
                            />
                          </label>
                        )}
                        <ErrorMessage
                          name="aadharFront"
                          component="div"
                          className="text-red-500  text-sm"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        {values.aadharBack ? (
                          <div className="rounded-md flex-1 gap-2 bg-white bg-opacity-[60%] text-white flex justify-start items-center text-xs">
                            <IconButton
                              className="p-1 m-1 h-8 w-8"
                              onClick={() => setFieldValue("aadharBack", null)}
                            >
                              <Icon icon="charm:cross" width={32} />
                            </IconButton>
                            {values.aadharBack.name.slice(0, 20)}
                          </div>
                        ) : (
                          <label className="cursor-pointer flex-1 flex justify-center items-center gap-2 text-center font-bold bg-white bg-opacity-[30%] hover:bg-opacity-[50%] text-white py-2 px-4 rounded-lg">
                            <span>Aadhar Back</span>
                            <Icon icon="material-symbols:upload" width={24} />
                            <input
                              name="aadharBack"
                              type="file"
                              className="hidden"
                              accept=".jpeg, .jpg, .png"
                              onChange={(event) => {
                                setFieldValue(
                                  "aadharBack",
                                  event.currentTarget.files[0]
                                );
                              }}
                            />
                          </label>
                        )}
                        <ErrorMessage
                          name="aadharBack"
                          component="div"
                          className="text-red-500  text-sm"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gray-50 hover:bg-gray-100 font-semibold text-[#0F002B] py-2 px-4 rounded-lg"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </Form>
                )}
              </Formik>
            )}
          </div>
          {users?.userKyc?.verificationStatus === "inprogress" ? (
            <Typography
              color="gray"
              className="mb-4 text-xl font-[Inter] mt-2 px-9 flex justify-center font-normal"
            >
              Your Kyc will be verify soon...{" "}
            </Typography>
          ) : (
            <Typography className=" mb-4 text-gray-300 px-3 flex flex-col text-[10px] font-[Inter] mt-1  max-w-sm mx-auto  justify-center font-normal ">
              <p>
                {" "}
                *Submit a document proving you are over 18 and not a resident of
                Assam, Odisha, Sikkim, Nagaland, Telangana, Andhra Pradesh,
                Tamil Nadu, Meghalaya, or Karnataka.
              </p>
              <p>
                {" "}
                Ensure you upload the correct image as it will be used for
                future reference in case of any issues.
              </p>
            </Typography>
          )}
        </Drawer>
      )}
    </div>
  );
};

export default NewProfileMob;
