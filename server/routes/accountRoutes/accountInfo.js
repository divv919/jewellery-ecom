import express from "express";
import * as accountController from "../../controllers/accountController.js";
const router = express.Router();

router.get("/", accountController.getAccountInfo);
router.put("/", accountController.putAccountInfo);
router.post("/", accountController.postAccountInfo);
// router.delete("/", accountController.deleteAccountInfo);

export default router;
