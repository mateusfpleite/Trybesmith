import express from 'express';
import productRouter from './Routes/products.routes';
import userRouter from './Routes/users.routes';

const app = express();

app.use(express.json());

app.use('/', productRouter);
app.use('/', userRouter);

export default app;
