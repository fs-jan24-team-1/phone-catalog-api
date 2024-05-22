import { Request, Response } from 'express';
import { productService } from '../services/productService';

export const productController = {
  getAllProducts: async (req: Request, res: Response) => {
    const products = await productService.getAllProducts();

    res.send(products);
  },

  getOneProduct: async (req: Request, res: Response) => {
    const product = await productService.getProductById(req.params.id);

    res.send(product);
  },

  getByCategory: async (req: Request, res: Response) => {
    const product = await productService.getByCategory(req.params.category, req.query);

    res.send(product);
  },

  getRecommendedProducts: async (req: Request, res: Response) => {
    const products = await productService.getRecommendedProducts(req.params.id);

    res.send(products);
  },

  getNewestProducts: async (req: Request, res: Response) => {
    const products = await productService.getNewestProducts();

    res.send(products);
  },

  getHotPricesProducts: async (req: Request, res: Response) => {
    const products = await productService.getNewestProducts();

    res.send(products);
  },
};
