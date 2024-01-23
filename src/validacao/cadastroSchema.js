const joi = require("joi");

const cadastroSchema = joi.object({
  nome: joi.string().required().messages({
    "any.required": "O campo nome é obrigatório.",
    "string.empty": "O campo nome é obrigatório.",
  }),

  email: joi.string().email().required().messages({
    "any.required": "O campo email é obrigatório.",
    "string.empty": "O campo email é obrigatório.",
    "string.email": "É necessário um e-mail válido.",
  }),
  cpf: joi.string().required().messages({
    "any.required": "O campo cpf é obrigatório.",
    "string.empty": "O campo cpf é obrigatório.",
  }),
  cnpj: joi.string().required().messages({
    "any.required": "O campo cpf é obrigatório.",
    "string.empty": "O campo cpf é obrigatório.",
  }),
});

module.exports = cadastroSchema;
