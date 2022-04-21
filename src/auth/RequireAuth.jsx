import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function RequireAuth({children}) {
    const authContext = useContext(AuthContext);
    const location = useLocation();
    if (!authContext.isAuthorized) {
        return <Navigate to="/login" state={{from: location}} replace/>;
    }

    return children;
}