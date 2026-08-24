import { Router } from 'express';
import * as productsCtrl from '../controllers/products.controller.js';
import createProductSchema from '../dtos/product.dto.js';
import { validateBody } from '../middlewares/validate.middleware.js';

const router = Router();

router.get('/', productsCtrl.getAllProducts);
router.get('/:id', productsCtrl.getProductById);
router.post('/', validateBody(createProductSchema), productsCtrl.createProduct);

export default router;
