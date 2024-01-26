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

    // URL do seu webhook
    const webhookUrl =
      "https://webhook.site/e784c116-d058-4684-8ec8-ff343b5d9937";

    // Dados que você deseja enviar no webhook (pode variar dependendo do serviço que está recebendo o webhook)
    const payload = {
      nome: "cliente.nome",
      cpf: "cliente.cpf",
      depósito: "cliente.deposito",
      valor: "cliente.deposito.valor",
      data: "cliente.deposito.data",
    };

    // Configuração da requisição
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    return res.status(201).json(cadastroDeposito);
  } catch (error) {
    console.log({ mensagem: error });
    return res.status(500).json({ mensagem: "erro interno do servidor" });
  }
};

module.exports = {
  cadastrarDeposito,
};
