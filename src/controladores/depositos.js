const knex = require("../conexoes/postgres");

const cadastrarDeposito = async (req, res) => {
  let { cpf, cnpj, valor } = req.body;

  const verificarCPF = await knex("cliente").where({ cpf }).first();

  if (!verificarCPF) {
    return res
      .status(400)
      .json({ mensagem: "CPF não encontrado! Verificar dados" });
  }

  const verificarEmpresa = await knex("empresa").where({ cnpj }).first();

  if (!verificarEmpresa) {
    return res
      .status(400)
      .json({ mensagem: "Empresa não encontrada! Verificar dados" });
  }

  if (!valor || valor == 0)
    return res.status(400).json({ mensagem: "Informar valor para depósito" });

  try {
    let taxaDeposito = 0.2;
    let desconto = valor - taxaDeposito;
    valor = desconto;

    const data = new Date();

    const cadastroDeposito = await knex("depositos")
      .insert({ cpf, cnpj, valor: parseInt(valor), data })
      .returning("*");
    console.log(cpf, cnpj, valor, data);
    return res.status(201).json(cadastroDeposito);
  } catch (error) {
    console.log({ mensagem: error });
    return res.status(500).json({ mensagem: "erro interno do servidor" });
  }
};

module.exports = {
  cadastrarDeposito,
};
