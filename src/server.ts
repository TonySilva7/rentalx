import express from 'express';
import 'reflect-metadata';
import swaggerUI from 'swagger-ui-express';
import { router } from './routes';
import './database';
import swaggerDocument from './swagger.json';

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use(router);

app.listen(3333, () => {
  console.log('Server is running on http://localhost:3333 🔥');
});
