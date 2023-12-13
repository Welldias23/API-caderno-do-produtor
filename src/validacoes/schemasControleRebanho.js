const joi = require("joi")

const schemasControleRebanho = joi.object({
  id_animal: joi.number().required().messages({
    "any.required": "O campo volume id é obrigatorio.",
    "number.base": "O campo id percisa ser number."
  }),
  nome: joi.string().messages({
    "string.base": "O campo nome precisa ser string."
  }),
  data_nascimento: joi.date().required().messages({
    "any.required": "O campo data_nascimeto é obrigatorio.",
    "date.base": "Deve ser uma data_nascimeto valida."
  }),
  sexo: joi.string().required().messages({
    "any.required": "O campo sexo é obrigatorio.",
    "string.base": "O campo sexo precisa ser string."
  }),
  id_pai: joi.number().messages({
    "number.base": "O campo id_pai percisa ser number."
  }),
  id_mae: joi.number().messages({
    "number.base": "O campo id_mae percisa ser number."
  }),
  peso: joi.number().required().messages({
    "any.required": "O campo peso é obrigatorio.",
    "number.base": "O campo peso percisa ser number."
  }),
  observacao: joi.string().required().messages({
    "any.required": "O campo observacao é obrigatorio.",
    "string.base": "O campo observacao precisa ser um texto."
  }),
  id_propriedade: joi.number().integer().required().messages({
    "any.required": "O campo id_propriedade é obrigatorio.",
    "number.base": "O campo id_propriedade deve ser um número."
  })
})

module.exports = {
  schemasControleRebanho
}
