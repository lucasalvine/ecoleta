import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  console.log("Lista de Usuários");

  res.json([
    'Lucas',
    'Jobson'
  ]);
});

app.listen(3000);

//npx ts-node => exec file
//npx ts-node-dev => exec file like nodemon