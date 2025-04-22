import express from "express";
const router = express.Router();
import accountInfo from "./accountInfo.js";
import orderInfo from "./ordersInfo.js";
import cartInfo from "./cartInfo.js";
import favoritesInfo from "./favoritesInfo.js";

router.use("/accountInfo", accountInfo);
router.use("/orderInfo", orderInfo);
router.use("/cartInfo", cartInfo);
router.use("/favoritesInfo", favoritesInfo);

export default router;
