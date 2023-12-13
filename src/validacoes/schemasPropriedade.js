const joi = require("joi")

const schemasPropriedade = joi.object({
  nome_propriedade: joi.string().required().messages({
    "any.required": "O campo nome_propriedade é obrigatorio.",
    "string.base": "O nome_propriedade precisa ser string."
  }),
  area_da_atividade: joi.string().required().messages({
    "any.required": "O campo area_da_atividade é obrigatorio.",
    "string.base": "O area_da_atividade precisa ser um número."
  }),
  area_produtiva: joi.string().required().messages({
    "any.required": "O campo area_produtiva é obrigatorio.",
    "string.base": "O area_produtiva precisa ser string."
  })
})

module.exports = {
  schemasPropriedade
}
