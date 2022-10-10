import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './mongoose/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// const logger = require('./middleware/logger');
//load env vars
dotenv.config();
connectDB();

// Route files
import userRoutes from './routes/userRoute.js';
import favRoutes from './routes/favRoute.js';

const app = express();
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
console.log(process.env.NODE_ENV);
// app.use(logger);

//Mount routers
app.use('/api/assign/students', userRoutes);
app.use('/api/assign/students', favRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server is running on ${PORT}`));
