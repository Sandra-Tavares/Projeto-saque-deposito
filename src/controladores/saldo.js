const knex = require("knex");

const consultarSaldo = async (req, res) => {
  const { cnpj } = req.body;

  const verificarEmpresa = await knex("depositos").where({ cnpj }).first();

  if (!verificarEmpresa) {
    return res.status(400).json({ mensagem: "CNPJ não encontrado" });
  }
  try {
    const saldo = await knex("depositos").select(" * ");

    return res.status(200).json(saldo);
  } catch (error) {
    return res.status(500).json({ mensagem: "erro interno do servidor" });
  }
};

module.exports = { consultarSaldo };
