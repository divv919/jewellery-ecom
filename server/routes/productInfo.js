import express from "express";
import getProductInfo from "../controllers/getProductInfoController.js";
import productReviewsController from "../controllers/productReviewsController.js";
const router = express.Router();

router.get("/:id", getProductInfo);
router.get("/:id/reviews", productReviewsController);
export default router;
