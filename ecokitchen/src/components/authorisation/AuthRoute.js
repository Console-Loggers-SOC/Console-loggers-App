import { useAuth } from "./AuthProvider.js";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRoute = () => {
  const { user } = useAuth();
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to={"/LandingPage"} replace state={{ path: location.pathname }} />
  );
};

export default AuthRoute;
