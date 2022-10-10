import { Router } from 'express';
import ProductController from '../controllers/Product.controller';
import { productAmountVal, productNameVal } from '../middlewares/insertProductMiddleware';

const productRouter = Router();

const productController = new ProductController();

productRouter.get('/products', productController.getAll);
productRouter.post('/products', productNameVal, productAmountVal, productController.insertProduct);
export default productRouter;