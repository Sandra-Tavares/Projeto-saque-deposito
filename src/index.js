require("dotenv").config;

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  return res.json("Olá da api-Porta3000");
});

app.listen(3000);
