import express from 'express';
import { productController } from '../controllers/productController';

export const productRouter = express.Router();

productRouter.get('/products/newest', productController.getNewestProducts);
productRouter.get('/products/hot-prices', productController.getHotPricesProducts);
productRouter.get('/products', productController.getAllProducts);
productRouter.get('/products/:id', productController.getOneProduct);
productRouter.get(
  '/products/:id/recommended',
  productController.getRecommendedProducts,
);
