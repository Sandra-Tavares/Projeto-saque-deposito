const express = require("express");

const { cadastrarEmpresa } = require("../controladores/empresas");

const rotasEmpresas = express();

rotasEmpresas.post("/empresas", cadastrarEmpresa);


module.exports = rotasEmpresas;
