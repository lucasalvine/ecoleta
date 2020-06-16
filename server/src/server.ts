import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

app.listen(3000);

//npx ts-node => exec file
//npx ts-node-dev => exec file like nodemon