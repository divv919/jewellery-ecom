import express from "express";
import cartController from "../controllers/cartController.js";
import accountController from "../controllers/accountController.js";
import ordersController from "../controllers/ordersController.js";
import favoritesController from "../controllers/favoritesController.js";
const router = express.Router();

router.get("/accountInfo", accountController);
router.get("/orderInfo", ordersController);
router.get("/cartInfo", cartController);
router.get("/favoritesInfo", favoritesController);

export default router;
