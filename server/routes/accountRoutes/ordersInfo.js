import express from "express";
import * as ordersController from "../../controllers/ordersController.js";
const router = express.Router();

router.get("/", ordersController.getOrders);
// router.put();
router.post("/:item_id/:quantity", ordersController.postOrders);
// router.delete();
export default router;
