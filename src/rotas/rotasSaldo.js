const express = require("express");
const { consultarSaldo } = require("../controladores/saldo");

const rotasSaldo = express();

rotasSaldo.get("/saque", consultarSaldo);

module.exports = rotasSaldo;
