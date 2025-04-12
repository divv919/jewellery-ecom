import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const result = await fetch("http://localhost:3000/api/auth/check", {
          credentials: "include",
        });
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
  if (loading) return null;
  return isAuth ? children : <Navigate to="/auth" />;
};

export default PrivateRoute;
