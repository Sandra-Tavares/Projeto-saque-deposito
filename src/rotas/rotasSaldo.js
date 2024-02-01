const express = require("express");
const { consultarSaldo } = require("../controladores/saldo");

const rotasSaldo = express();

rotasSaldo.get("/saldo", consultarSaldo);

module.exports = rotasSaldo;
