import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import SuperAdminTopbar from "./SuperAdminTopbar";
import SuperAdminSidebar from "./SuperAdminSidebar";
import { selectToken } from "../../app_start/authSlice";
import { isExpired } from "react-jwt";
import { useDispatch, useSelector } from "react-redux";
import useOnlineStatus from "../Functions/useOnlineStatus";
import NoInternetPage from "../../MainLayout/NoInternetPage";

const SuperAdminLayout = ({ children }) => {
  const isOnline = useOnlineStatus();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const { accessToken, refreshToken } = useSelector((state) => state.auth);
  const isMyTokenExpired = isExpired(token);
  console.log(token, accessToken, refreshToken);
  useEffect(() => {
    if (accessToken && refreshToken && isMyTokenExpired) {
      console.log("expire yes");
      dispatch(logoutAsync({ token: accessToken, refreshtoken: refreshToken }));
    }
  }, [dispatch, isMyTokenExpired, accessToken, refreshToken]);
  useEffect(() => {
    if (!isOnline) {
      console.log(isOnline);
      toast.warning("No Internet Connection");
    }
  }, [isOnline]);
  if (!isOnline) {
    return <NoInternetPage />;
  }
  if (!localStorage.getItem("accessToken") || !accessToken) {
    return <Navigate to="/adminlogin" replace />;
  }

  return (
    <div className="bg-[#E6E6E6] box-border h-screen w-full">
      <SuperAdminTopbar />
      <div className="flex gap-2 h-[91.6%] overflow-hidden">
        <SuperAdminSidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default SuperAdminLayout;
