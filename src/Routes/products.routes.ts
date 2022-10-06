import { Router } from 'express';
import ProductController from '../controllers/Product.controller';

const productRouter = Router();

const productController = new ProductController();

productRouter.get('/products', productController.getAll);
productRouter.post('/products', productController.insertProduct);
export default productRouter;