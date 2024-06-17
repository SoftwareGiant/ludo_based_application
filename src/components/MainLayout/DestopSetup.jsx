import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { logoutAsync, selectToken } from "../app_start/authSlice";
import { isExpired } from "react-jwt";
import DestopAppDetails from "./DestopAppDetails";
import { toast } from "react-toastify";
import useOnlineStatus from "../admin_and_S.admin/Functions/useOnlineStatus";

const DestopSetup = ({ children }) => {
  const isOnline = useOnlineStatus();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const { accessToken, refreshToken } = useSelector((state) => state.auth);
  const isMyTokenExpired = isExpired(token);
  console.log(token);
  useEffect(() => {
    if (accessToken && refreshToken && isMyTokenExpired) {
      console.log("expire");
      dispatch(logoutAsync({ token: accessToken, refreshtoken: refreshToken }));
    }
  }, [dispatch, isMyTokenExpired, accessToken, refreshToken]);
  console.log(isOnline, "no internet");
  useEffect(() => {
    if (!isOnline) {
      console.log(isOnline);
      toast.warning("No Internet Connection");
    }
  }, [isOnline]);
  return (
    <div className="sm:flex  h-screen ">
      <div className="max-h-screen max-w-[480px] w-full sm:min-w-[480px]  overflow-scroll">
        <Outlet />
      </div>
      <div className="max-h-screen  overflow-scroll">
        <DestopAppDetails />
      </div>
    </div>
  );
};

export default DestopSetup;
