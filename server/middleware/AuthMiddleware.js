// import passport from "passport";
const AuthMiddleware = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.status(401).json({ message: "Unauthorized. Please Login" });
  }
};
export default AuthMiddleware;
