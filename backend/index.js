import express from 'express';
import boardRouter from './routes/board.route.js';
import commentRouter from './routes/user.route.js';
import pinRouter from './routes/pin.route.js';
import userRouter from './routes/user.route.js';
import connectDB from './utils/connectDB.js';

const app = express();

app.use('/boards', boardRouter);
app.use('/comments', commentRouter);
app.use('/pins', pinRouter);
app.use('/users', userRouter);

app.listen(3000, () => {
  connectDB();
  console.log('Server is running');
});
