import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { logoutAsync, selectToken } from "../app_start/authSlice";
import { isExpired } from "react-jwt";
import DestopAppDetails from "../MainLayout/DestopAppDetails";
const ProtectedRoute = ({ children }) => {
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
  if (!accessToken || isMyTokenExpired) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div className="sm:flex h-screen">
      <div className="max-h-screen max-w-[480px] w-full sm:min-w-[480px]  overflow-scroll">
        <Outlet />
      </div>
      <div className="max-h-screen  overflow-scroll">
        <DestopAppDetails />
      </div>
    </div>
  );
};

export default ProtectedRoute;
