import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
   
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
      }

    return <Outlet/>;

}

export default ProtectedRoute