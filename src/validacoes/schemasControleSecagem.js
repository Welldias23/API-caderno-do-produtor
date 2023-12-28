const joi = require("joi")

const schemasControleSecagens = joi.object({
  id_animal: joi.number().required().messages({
    "any.required": "O campo volume id é obrigatorio.",
    "number.base": "O campo id_animal percisa ser number."
  }),
  nome: joi.string().messages({
    "string.base": "O campo nome precisa ser string."
  }),
  previsao_de_parto: joi.date().required().messages({
    "any.required": "O campo previsao_de_parto é obrigatorio.",
    "date.base": "Deve ser uma previsao_de_parto valida."
  }),
  data_de_secagem: joi.date().required().messages({
    "any.required": "O campo data_de_secagem é obrigatorio.",
    "date.base": "Deve ser uma data_de_secagem valida."
  }),
  medicamento_utilizado: joi.string().messages({
    "any.required": "O campo medicamento_utilizado é obrigatorio.",
    "string.base": "O campo medicamento_utilizado percisa ser string."
  }),
  observacao: joi.string().messages({
    "any.required": "O campo observacao é obrigatorio.",
    "string.base": "O campo observacao precisa ser um texto."
  }),
  id_propriedade: joi.number().integer().required().messages({
    "any.required": "O campo id_propriedade é obrigatorio.",
    "number.base": "O campo id_propriedade deve ser um número."
  })
})

module.exports = {
  schemasControleSecagens
}
