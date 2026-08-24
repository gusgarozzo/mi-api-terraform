import express from 'express';
import apiRouter from './routes/index.js';
import { errorHandler } from './middlewares/error.middleware.js';
import { AppError } from './errors/appError.js';

const app = express();

app.use(express.json({ limit: '10kb' })); 

app.use('/api/v1', apiRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`No se encontró ${req.originalUrl} en este servidor`, 404));
});

app.use(errorHandler);

export default app;