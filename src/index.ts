import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import './database/connection.ts';
import routes from '../src/api/routes';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors()); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/cinelist', routes);

app.listen(3000, () => {
  console.log('Server started on port 3000!');
});
