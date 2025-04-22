import express from "express";
import * as favoritesController from "../../controllers/favoritesController.js";

const router = express.Router();

router.get("/", favoritesController.getFavorite);
// router.put('/');
router.post("/:item_id", favoritesController.postFavorite);
router.delete("/:item_id", favoritesController.deleteFavorite);
router.delete("/all", favoritesController.deleteAllFavorites);

export default router;
