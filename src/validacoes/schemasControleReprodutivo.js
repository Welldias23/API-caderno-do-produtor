const joi = require("joi")

const schemasControleReprodutivo = joi.object({
  id_animal: joi.number().required().messages({
    "any.required": "O campo volume id é obrigatorio.",
    "number.base": "O campo id_animal percisa ser number."
  }),
  nome: joi.string().messages({
    "string.base": "O campo nome precisa ser string."
  }),
  data_hora_do_cio: joi.date().required().messages({
    "any.required": "O campo data_hora_do_cio é obrigatorio.",
    "date.base": "Deve ser uma data_hora_do_cio valida."
  }),
  data_hora_da_inseminacao_monta: joi.date().required().messages({
    "any.required": "O campo data_hora_da_inseminacao_monta é obrigatorio.",
    "date.base": "Deve ser uma data_hora_da_inseminacao_monta valida."
  }),
  nome_touro: joi.string().required().messages({
    "any.required": "O campo nome_touro é obrigatorio.",
    "string.base": "O campo nome_touro percisa ser string."
  }),
  inseminador: joi.string().required().messages({
    "any.required": "O campo inseminador é obrigatorio.",
    "string.base": "O campo inseminador percisa ser string."
  }),
  prenhe: joi.string().required().messages({
    "any.required": "O campo prenhe é obrigatorio.",
    "string.base": "O campo prenhe percisa ser string."
  }),
  previsao_de_parto: joi.date().required().messages({
    "any.required": "O campo previsao_de_parto é obrigatorio.",
    "date.base": "Deve ser uma previsao_de_parto valida."
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
  schemasControleReprodutivo
}
