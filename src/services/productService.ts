import { phones, tablets, accessories, products } from '../data/products';

export const productService = {
  getAllProducts: () => products,
  getPhones: () => phones,
  getTablets: () => tablets,
  getAccessories: () => accessories,
};
