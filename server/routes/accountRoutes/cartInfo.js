import express from "express";
import * as cartController from "../../controllers/cartController.js";

const router = express.Router();

router.get("/", cartController.getCartItem);
router.post("/:item_id", cartController.postCartItem);
router.delete("/:item_id", cartController.deleteCartItem);
router.delete("/", cartController.deleteAllCartItems);
router.put("/:item_id/:increment", cartController.putCartItem);

export default router;
