import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { logoutAsync, selectToken } from "../app_start/authSlice";
import { isExpired, useJwt } from "react-jwt";
const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const { accessToken, refreshToken } = useSelector((state) => state.auth);
  const isMyTokenExpired = isExpired(token);
  useEffect(() => {
    if (isMyTokenExpired) {
      dispatch(logoutAsync({ token: accessToken, refreshtoken: refreshToken }));
    }
  }, [dispatch, isMyTokenExpired, accessToken, refreshToken]);
  if (!accessToken || isMyTokenExpired) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
