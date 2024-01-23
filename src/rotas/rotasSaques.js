const express = require("express");

const { cadastrarSaque } = require("../controladores/saques");

const rotasSaques= express();

rotasSaques.post("/saque", cadastrarSaque);


module.exports = rotasSaques;