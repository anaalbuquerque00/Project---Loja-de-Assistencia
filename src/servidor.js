import express from 'express';

const PORTA = Number(process.env.PORT) || 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Olá! O servidor da Assistência Técnica está a funcionar.');
});

app.listen(PORTA, (erro) => {
  if (erro) {
    console.error(`Não foi possível arrancar o servidor: ${erro.message}`);
    process.exitCode = 1;
    return;
  }
  console.log(`Servidor a correr em http://localhost:${PORTA}`);
});
