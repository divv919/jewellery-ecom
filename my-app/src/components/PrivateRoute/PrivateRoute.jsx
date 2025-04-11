import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);
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
        setIsAuth(false);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  return isAuth ? children : <Navigate to="/auth" />;
};

export default PrivateRoute;
