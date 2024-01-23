require("dotenv").config();

const express = require("express");

const rotasClientes = require("./rotas/rotasClientes");
const rotasEmpresas = require("./rotas/rotasEmpresas");
const rotasDepositos = require("./rotas/rotasDepositos");
const rotasSaques = require("./rotas/rotasSaques");

const app = express();

app.use(express.json());

app.use(rotasClientes);
app.use(rotasEmpresas);
app.use(rotasDepositos);
app.use(rotasSaques);

const PORT = 3000;
// app.get("/", (req, res) => {
//   res.send("Servidor conectado");
// });

app.listen(PORT, () => {
  console.log(`conectado na porta ${PORT}`);
});
