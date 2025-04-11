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
  })
);

app.use(passport.initialize());
app.use(passport.session());

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

// app.use("/api/auth/google");
// app.use("/api/auth/google/cb");
// app.use("/api/login");
// app.use("/api/register");
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/productInfo/", productInfoRoute);

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "",
      scope: ["profile", "email"],
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    async (accessToken, refreshToken, profile, cb) => {
      try {
        const result = await User.findAll({
          attributes: ["email"],
          where: {
            email: profile.email,
          },
        });
        if (result.rows[0].length === 0) {
          const { user_id } = User.create({
            email: profile.email,
          });
          return cb(null, { user_id: user_id });
        } else {
          return cb(null, { user_id: result.rows[0].user_id });
        }
      } catch {
        return cb(err);
      }
    }
  )
);

passport.serializeUser((user_id_detail, cb) => {
  cb(null, user_id_detail);
});
passport.deserializeUser(async (user_id_detail, cb) => {
  const result = await User.findAll({
    where: { user_id: user_id_detail.user_id },
  });
  cb(null, result.rows[0]);
});

app.listen(PORT, () => {
  console.log(`listening at port : ${PORT}`);
});
