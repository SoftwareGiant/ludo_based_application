import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { logoutAsync, selectToken } from "../app_start/authSlice";
import { isExpired } from "react-jwt";
import DestopAppDetails from "./DestopAppDetails";

const DestopSetup = ({ children }) => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const { accessToken, refreshToken } = useSelector((state) => state.auth);
  const isMyTokenExpired = isExpired(token);
  console.log(token);
  useEffect(() => {
    if (isMyTokenExpired) {
      dispatch(logoutAsync({ token: accessToken, refreshtoken: refreshToken }));
    }
  }, [dispatch, isMyTokenExpired, accessToken, refreshToken]);
  // if (!accessToken || isMyTokenExpired) {
  //   return <Navigate to="/" replace />;
  // }
  return (
    <div className="sm:flex">
      <Outlet />
      <DestopAppDetails />
    </div>
  );
};

export default DestopSetup;
