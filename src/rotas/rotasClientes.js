const express = require("express");

const { cadastrarCliente } = require("../controladores/clientes");

const rotasClientes = express();

rotasClientes.post("/clientes", cadastrarCliente);


module.exports = rotasClientes;
