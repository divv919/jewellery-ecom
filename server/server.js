import express from "express";
import cors from "cors";
import "dotenv/config";
import productRoutes from "./routes/products.js";
import categoryRoutes from "./routes/category.js";
import productInfoRoute from "./routes/productInfo.js";
import { sequelize, connectDB } from "./db/index.js";
import GoogleStrategy from "passport-google-oauth2";
import session from "express-session";
import passport from "passport";
import User from "./models/User.js";
import AuthMiddleware from "./middleware/AuthMiddleware.js";
import accountRoutes from "./routes/accountRoutes/routes.js";

const PORT = process.env.PORT || 5000;
const app = express();
// env.config();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      sameSite: "lax",
      secure: false,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: false });
    console.log("Database synced successfully.");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
};
connectDB();
syncDatabase();
app.get("/api/auth/check", (req, res) => {
  res.json({ authenticated: req.isAuthenticated(), user: req.user || null });
});

app.get("/api/auth/google", (req, res, next) => {
  passport.authenticate("google", {
    scope: ["profile", "email"],
    state: { redirectTo: req.query.redirectTo },
  })(req, res, next);
});

app.get(
  "/api/auth/google/cb",
  passport.authenticate("google", {
    // successRedirect: "http://localhost:5173",
    failureRedirect: "http://localhost:5173/auth",
  }),
  (req, res) => {
    res.redirect(`http://localhost:5173${req.authInfo.state.redirectTo}`);
  }
);
// app.use("/api/login");
// app.use("/api/register");
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/productInfo/", productInfoRoute);

app.use("/api/accounts/", AuthMiddleware, accountRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});
passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/auth/google/cb",
      scope: ["profile", "email"],
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
      store: true,
    },
    async (accessToken, refreshToken, profile, cb) => {
      try {
        const result = await User.findOne({
          attributes: ["user_id"],
          where: {
            email: profile.email,
          },
        });
        if (result) {
          return cb(null, { user_id: result.get("user_id") });
        } else {
          const { user_id } = User.create({
            email: profile.email,
            first_name: profile.given_name,
            last_name: profile.family_name,
            username: profile.given_name,
          });
          return cb(null, { user_id: user_id });
        }
      } catch (err) {
        console.error("Error with strategy", err);
        return cb(err);
      }
    }
  )
);

passport.serializeUser((user_id_detail, cb) => {
  cb(null, user_id_detail);
});
passport.deserializeUser(async (user_id_detail, cb) => {
  const result = await User.findOne({
    where: { user_id: user_id_detail.user_id },
  });
  cb(null, result);
});

app.listen(PORT, () => {
  console.log(`listening at port : ${PORT}`);
});
