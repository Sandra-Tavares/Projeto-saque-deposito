const knex = require("../conexoes/postgres");

const cadastrarEmpresa = async (req, res) => {
  const { nome, email, senha, cnpj } = req.body;
  

  const verificarCNPJ = await knex("cliente").where({ cpf }).first();

  if (verificarCNPJ) {
    return res.status(400).json({ mensagem: "CPF já cadastrado" });
  }
  try {
    const cadastroEmpresa = await knex("cliente")
      .insert({ nome, email, senha, cnpj })
      .returning("*");

 
    return res.status(201).json(cadastroEmpresa);
  } catch (error) {
    console.log({ mensagem: error });
    return res.status(500).json({ mensagem: "erro interno do servidor" });
  }
};

module.exports = {
  cadastrarEmpresa
};
