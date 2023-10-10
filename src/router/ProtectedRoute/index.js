import React, { Fragment, useEffect } from "react";
import { useUser } from "../../state/user/hooks";
import { Navigate, useLocation } from "react-router-dom";
import { PATHS } from "../../constants";
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useUser();
  const { pathname } = useLocation();

  //save the pathname to redirect the user after logging in
  useEffect(() => {
    if (!isAuthenticated) return localStorage.setItem("path", pathname);
    else localStorage.removeItem("path");
  }, [isAuthenticated, pathname]);
  return (
    <>
      {!isAuthenticated ? (
        <Navigate to={PATHS.SIGNIN} />
      ) : (
        <Fragment>{children}</Fragment>
      )}
    </>
  );
}

export default ProtectedRoute;
