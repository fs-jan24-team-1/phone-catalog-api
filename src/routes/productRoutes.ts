import express from 'express';
import { productController } from '../controllers/productController';

export const productRouter = express.Router();

productRouter.get('/products', productController.getAllProducts);
productRouter.get('/phones', productController.getPhones);
productRouter.get('/tablets', productController.getTablets);
productRouter.get('/accessories', productController.getAccessories);
