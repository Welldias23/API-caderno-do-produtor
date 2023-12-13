const joi = require("joi")

const schemasControlePluviometrico = joi.object({
  id_propriedade: joi.number().integer().required().messages({
    "any.required": "O campo id_propriedade é obrigatorio.",
    "number.base": "O campo id_propriedade deve ser um número."
  }),
  data_chuva: joi.date().required().messages({
    "any.required": "O campo data_chuva é obrigatorio.",
    "date.base": "Deve ser uma data valida."
  }),
  volume_de_chuva: joi.number().required().messages({
    "any.required": "O campo volume De Chuva é obrigatorio.",
    "number.base": "O campo volume de chuva percisa ser number."
  })
})

module.exports = {
  schemasControlePluviometrico
}
