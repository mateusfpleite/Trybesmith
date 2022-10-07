import express from 'express';
import orderRouter from './Routes/orders.routes';
import productRouter from './Routes/products.routes';
import userRouter from './Routes/users.routes';

const app = express();

app.use(express.json());

app.use('/', productRouter);
app.use('/', userRouter);
app.use('/', orderRouter);

export default app;
