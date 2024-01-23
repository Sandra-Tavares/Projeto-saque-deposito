const express = require("express");

const {cadastrarDeposito}= require('../controladores/depositos')

const rotasDepositos= express();

rotasDepositos.post("/depositos", cadastrarDeposito);


module.exports = rotasDepositos;