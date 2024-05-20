import { Request, Response } from 'express';
import { productService } from '../services/productService';

export const productController = {

  getAllProducts: (req: Request, res: Response) => {
    res.send(productService.getAllProducts());
  },
  
  getPhones: (req: Request, res: Response) => {
    res.send(productService.getPhones());
  },
  
  getTablets: (req: Request, res: Response) => {
    res.send(productService.getTablets());
  },
  
  getAccessories: (req: Request, res: Response) => {
    res.send(productService.getAccessories());
  },
};
