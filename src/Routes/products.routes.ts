import { Router } from 'express';
import ProductController from '../controllers/Products.controller';

const productRouter = Router();

const productController = new ProductController();

productRouter.get('/products', productController.getAll);

export default productRouter;