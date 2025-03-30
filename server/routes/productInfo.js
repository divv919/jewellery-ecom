import express from 'express';
import  getProductInfo  from '../controllers/getProductInfoController.js';
const router = express.Router();

router.get('/:id',getProductInfo);
export default router;