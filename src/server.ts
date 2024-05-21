import express from 'express';
import cors from 'cors';
import { productRouter } from './routes/productRoutes';
import prisma from './utils/db';

const PORT = process.env.PORT || 5005;
const app = express();

app.use(cors({ origin: '*' }));

app.get('/api/products', async (req, res) => {
  const products = await prisma.product.findMany({
  });

  res.send(products);
});


app.use('/', productRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
