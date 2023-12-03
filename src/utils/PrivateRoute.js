import { Navigate, Outlet } from "react-router-dom";

export default PrivateRoute = () => {
  let authToken = localStorage.getItem("token") ?? null;

  return authToken ? <Outlet /> : <Navigate to="/signin" />;
};
