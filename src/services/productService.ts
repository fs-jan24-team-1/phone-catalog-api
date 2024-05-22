import prisma from '../utils/db';

export const productService = {
  getAllProducts: async () => {
    const products = await prisma.product.findMany();

    return products;
  },

  getProductById: async (id: string) => {
    const product = await prisma.productInfo.findUnique({
      where: {
        id,
      },
    });
    return product;
  },

  getRecommendedProducts: async (id: string) => {
    const targetProduct = await prisma.productInfo.findUnique({
      where: {
        id,
      },
    });

    const category = targetProduct?.category;

    const products = await prisma.product.findMany({
      where: {
        category,
      },
      take: 10,
    });
    return products;
  },

  getNewestProducts: async () => {
    const products = await prisma.product.findMany({
      orderBy: {
        year: 'desc',
      },
      take: 10,
    });
    return products;
  },

  getHotPricesProducts: async () => {
    const products = await prisma.product.findMany({
      orderBy: {
        price: 'asc',
      },
      take: 10,
    });
    return products;
  },
};
