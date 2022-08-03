import express from 'express';
import 'dotenv/config';
import 'express-async-errors';
import { router } from './routes';
import { errorHandlerMiddleware } from './middlewares/errorHandler';

const app = express();

app.use(express.json());

app.use(router);

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 4000;

async function start(){
  try{
    app.listen(port, () => console.log(`Server is listening on port ${port}...`));
  }catch(error){
    console.log(error);
  }
};

start();