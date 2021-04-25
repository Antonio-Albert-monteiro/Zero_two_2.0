const express = require('express');
const app = express();

const port = normalizePort(process.env.Port || '3000');
app.set('port', port);
app.listen(port);

app.get("/", (request, response) => {
  console.log("ping recebido do principal");
});

app.get("/monitor1", (request, response) => {
  console.log("ping recebido do monitor1");
});

app.get("/monitor2", (request, response) => {
  console.log("ping recebido do monitor2");
});

app.get("/monitor3", (request, response) => {
  console.log("ping recebido do monitor3");
});

app.get("/monitor4", (request, response) => {
  console.log("ping recebido do monitor4");
});

app.get("/monitor5", (request, response) => {
  console.log("ping recebido do monitor5");
});

app.get("/monitor6", (request, response) => {
  console.log("ping recebido do monitor6");
});

function normalizePort(val) {
    const port = parseInt(val, 10);
    
    if (isNaN(port)) {
        return val;
    }
    
    if (port >= 0) {
        return port;
    }
    
    return false;
}
console.log(`estou rodando na porta ${port}`)