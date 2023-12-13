const joi = require("joi")

const schemasControleLeiteiroIndividual = joi.object({
  id_vaca: joi.number().required().messages({
    "any.required": "O campo id_vaca é obrigatorio.",
    "number.base": "O campo id_vaca percisa ser um número."
  }),
  id_propriedade: joi.number().integer().required().messages({
    "any.required": "O campo id_propriedade é obrigatorio.",
    "number.base": "O campo id_propriedade deve ser um número."
  }),
  data: joi.date().required().messages({
    "any.required": "O campo data é obrigatorio.",
    "date.base": "Deve ser uma data valida."
  }),
  lote: joi.number().required().messages({
    "any.required": "O campo lote é obrigatorio.",
    "number.base": "O campo lote percisa ser um número."
  }),
  producao_manha: joi.number().required().messages({
    "any.required": "O campo producao_manha é obrigatorio.",
    "number.base": "O campo producao_manha percisa ser um número."
  }),
  producao_tarde: joi.number().required().messages({
    "any.required": "O campo producao_tarde é obrigatorio.",
    "number.base": "O campo producao_tarde percisa ser um número."
  })
})

module.exports = {
  schemasControleLeiteiroIndividual
}
