import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from '../app_start/authSlice';

const ProtectedRoute = ({ children}) => {
   const token = useSelector(selectToken);
   console.log(token)
    if (!token) {
        return <Navigate to="/login" replace />;
      }

    return <Outlet/>;

}

export default ProtectedRoute