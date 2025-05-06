import { Skeleton } from "@mui/material";
import { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  console.log(location.pathname);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const result = await fetch("http://localhost:3000/api/auth/check", {
          credentials: "include",
        });
        // await new Promise((resolve) => setTimeout(resolve, 3000));
        const res = await result.json();

        setIsAuth(res.authenticated);
      } catch (err) {
        console.log("Is error");
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);
  if (loading)
    return (
      <div
        style={{
          width: "100%",
          height: "90vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "2vw",
        }}
      >
        <Skeleton variant="rectangular" width="20%" height="90%" />
        <Skeleton variant="rectangular" width="50%" height="90%" />
      </div>
    );
  return isAuth ? (
    children
  ) : (
    <Navigate to={`/auth?redirectTo=${location.pathname}`} />
  );
};

export default PrivateRoute;
