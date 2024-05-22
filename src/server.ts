import express from 'express';
import cors from 'cors';
import { productRouter } from './routes/productRoutes';

const PORT = process.env.PORT || 5005;
const app = express();

app.use(cors({ origin: '*' }));

app.use('/', productRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
