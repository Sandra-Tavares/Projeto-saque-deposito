const knex = require("knex");

const consultarSaldo = async (req, res) => {
  const { cnpj } = req.body;

  const verificarEmpresa = await knex("depositos").where({ cnpj }).first();

  if (!verificarEmpresa) {
    return res.status(400).json({ mensagem: "CNPJ não encontrado" });
  }
  try {
    const valoresDepositados = await knex("depositos")
      .sum(" valor as total")
      .where({ cnpj })
      .first();
    const totalDepositado = valoresDepositados.total || 0;

    const valoresSacados = await knex("saques")
      .sum(" valor as total")
      .where({ cnpj })
      .first();
    const totalSacado = valoresSacados.total || 0;

    const saldo = totalDepositado - totalSacado;
    console.log(saldo);
    return res.status(200).json(saldo);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensagem: "erro interno do servidor" });
  }
};

module.exports = { consultarSaldo };
