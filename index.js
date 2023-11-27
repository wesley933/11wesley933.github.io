const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const porta = 8080;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, res) => {
  res.send('Resposta GET');
});

app.post('/', (request, res) => {
  res.send('Resposta POST');
});

app.put('/', (request, res) => {
  res.send('Resposta PUT');
});

app.delete('/', (request, res) => {
  res.send('Resposta DELETE');
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});


//para rodar o codigo basta ir no terminal e colocar os sigintes codigos
//npm install express body-parser
//node index.js
