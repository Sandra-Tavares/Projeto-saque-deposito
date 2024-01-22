const knex = require("../conexoes/postgres");

const cadastrarCliente = async (req, res) => {
  const { nome, email, senha, cpf } = req.body;
  

  const verificarCPF = await knex("cliente").where({ cpf }).first();

  if (verificarCPF) {
    return res.status(400).json({ mensagem: "CPF já cadastrado" });
  }
  try {
    const cadastroCliente = await knex("cliente")
      .insert({ nome, email, senha, cpf })
      .returning("*");

    console.log(cadastroCliente);
    return res.status(201).json(cadastroCliente);
  } catch (error) {
    console.log({ mensagem: error });
    return res.status(500).json({ mensagem: "erro interno do servidor" });
  }
};

module.exports = {
  cadastrarCliente
};
