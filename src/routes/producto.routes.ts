import { Router } from 'express';
import { getProducts, createProduct } from '../controllers/producto.controller';
import { verifyToken, isAdmin } from '../middlewares/auth.middleware';
const router = Router();
router.get('/', getProducts);
router.post('/', [verifyToken, isAdmin], createProduct);
export default router;