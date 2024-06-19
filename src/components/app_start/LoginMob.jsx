import { Icon } from "@iconify-icon/react";
import {
    Menu, MenuHandler, MenuItem,
    MenuList
} from "@material-tailwind/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import "../../App.css";
import BackgroundImg from "../../assets/background.jpg";
import CountryIcon from "../../assets/country.svg";
import DropIcon from "../../assets/dropicon.svg";
import ButtonLoader from "../MainLayout/ButtonLoader";
import { loginAsync, selectToken } from "./authSlice";

const validationSchema = Yup.object().shape({
  number: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
});

const LoginMob = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoadButton, setIsLoadButton] = useState(false);
  const initialValues = {
    number: "",
  };

  const token = useSelector(selectToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(token)
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);
  const handlePhoneSubmit = async (values) => {
    let intervalId;
    dispatch(loginAsync(values.number))
      .unwrap()
      .then(() => {
        setIsSuccess(true);
        intervalId = setTimeout(() => {
          setIsSuccess(false);
          navigate("/");
        }, 400);
        return () => {
          clearInterval(intervalId);
        };
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };


  return (
    <div className="h-full min-h-screen w-full max-w-[480px]">
      <div
        id="NotificationspaceRoot"
        className="bg-[#fead3a]  h-8 overflow-hidden max-w-[480px] w-full "
      />
      {isSuccess ? (
        <div className="flex flex-col h-[500px] gap-6 w-full font-['Inter'] items-center  justify-center max-w-[480px]">
          <div className="bg-[#fead3a] rounded-full w-[150px] h-[150px] flex justify-center items-center">
            <Icon icon="mdi:tick" width="94" className="text-white" />
          </div>

          <div className="text-center text-5xl font-medium text-black">
            success
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-between w-full max-w-[480px]">
          <div className="max-w-[480px] w-full  h-full">
            <div
              className="bg-[#fead3a] min-h-[420px] overflow-hidden bg-cover bg-center  "
              style={{ backgroundImage: `url(${BackgroundImg})` }}
            ></div>
            <div className="h-full flex flex-col justify-between">
              <div className="max-w-[480px] w-full h-full">
                <div className="justify-center items-center  bg-gradient  flex flex-col   -mt-[6.95rem]">
                  <h3 className="text-center text-5xl font-['Nunito_Sans'] font-extrabold p-3 flex flex-wrap justify-center text-[#0f002b]">
                    <span>Ludo</span> <span>Maharaj </span>
                  </h3>
                  <h5 className="font-oooh text-4xl font-bold text-center ">
                    Play and Earn
                  </h5>
                </div>
                <>
                  {/* signup tags starts  */}
                  <div className="flex justify-center w-full ">
                    <div
                      id="Line"
                      className="border-solid border-black/30 w-full h-px absolute top-8 left-0 border-t border-b-0 border-x-0"
                    />
                    <div className="text-center text-lg font-['Inter'] font-medium text-[#0f002b] relative flex flex-row justify-center p-4  items-start rounded-lg bg-white">
                      Log in
                    </div>
                  </div>

                  <div className="flex flex-col m-4  gap-6 ">
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={handlePhoneSubmit}
                    >
                      {({ isValid }) => (
                        <Form className="flex flex-col gap-2">
                          {/* Your country code and input field */}

                          <div className="border-2  border-gray-300 text-lg rounded-lg items-center mx-auto bg-white focus:outline-none  transition duration-300 ease-in-out flex flex-row gap-4 justify-center pt-3 px-4  w-full h-[56px] py-[10px]">
                            <Menu>
                              <MenuHandler>
                                <div className="flex flex-row gap-2 w-16 items-start">
                                  <img
                                    src={CountryIcon}
                                    alt="Twemojiflagindia"
                                    id="Twemojiflagindia"
                                    className="w-8"
                                  />
                                  <img
                                    src={DropIcon}
                                    alt="Gridiconsdropdown"
                                    id="Gridiconsdropdown"
                                    className="mt-1 w-5"
                                  />
                                </div>
                              </MenuHandler>
                              <MenuList className="min-w-[100px]">
                                <MenuItem className="flex p-1 justify-center">
                                  <div className="flex  gap-2 w-16 items-center">
                                    <img
                                      src={CountryIcon}
                                      alt="Twemojiflagindia"
                                      id="Twemojiflagindia"
                                      className="w-8"
                                    />
                                    <span className="font-bold text-black text-xl">
                                      +91
                                    </span>
                                  </div>
                                </MenuItem>
                              </MenuList>
                            </Menu>
                            <Field
                              inputMode="numeric"
                              pattern="[0-9]*"
                              type="text"
                              name="number"
                              className="p-2 font-bold   w-full focus:outline-none appearance-none"
                              placeholder="Enter Phone Number"
                              onInput={(e) => {
                                e.target.value = e.target.value
                                  .replace(/\D/g, "")
                                  .slice(0, 10); // Remove non-numeric characters and limit to 10 digits
                              }}
                            />
                          </div>

                          <ErrorMessage
                            name="number"
                            component="div"
                            className="text-red-500"
                          />

                          <button
                            type="submit"
                            disabled={!isValid || isLoadButton}
                            className="text-center items-center text-xl mx-auto font-['Inter'] h-[56px] w-full px-[16px] text-[20px] font-bold gap-[10px] shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center pt-4 rounded-lg bg-[#0f002b] text-white p-4 mt-2"
                          >
                            {isLoadButton ? (
                              <ButtonLoader isLight={true} />
                            ) : (
                              "Login"
                            )}
                          </button>
                          <div className="flex justify-end">
                            <Link
                              className="text-[#fead3a] text-end"
                              to="/register"
                            >
                              New user ? <b>Register</b>
                            </Link>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-[480px] m-auto justify-center gap-2 pb-10">
            <Link
              to="/terms"
              className="text-center text-xs font-['Inter'] font-medium"
            >
              Terms of Service
            </Link>
            <div className="h-1 w-1 rounded-full bg-black"></div>
            <Link
              to="/privacy"
              className="text-center text-xs font-['Inter'] font-medium"
            >
              Privacy Policy
            </Link>
            <div className="h-1 w-1 rounded-full bg-black"></div>
            <Link
              to="/content"
              className="text-center text-xs font-['Inter'] font-medium"
            >
              Content Policies
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginMob;
