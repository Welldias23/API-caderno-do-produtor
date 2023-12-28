const joi = require("joi")

const schemasControlePesagem = joi.object({
  id_animal: joi.number().required().messages({
    "any.required": "O campo id_animal é obrigatorio.",
    "number.base": "O campo id_animal deve ser um número."
  }),
  nome: joi.string().messages({
    "string.base": "O campo nome precisa ser string."
  }),
  data_pesagem: joi.date().required().messages({
    "any.required": "O campo data_pesagem é obrigatorio.",
    "date.base": "data_pesagem Deve ser uma data valida."
  }),
  apta_reroducao: joi
    .boolean()
    .truthy("sim")
    .falsy("não")
    .sensitive()
    .required()
    .messages({
      "any.required": "O campo apta_reroducao é obrigatorio.",
      "boolean.base": "Deve ser uma apta_reroducao valida."
    }),
  id_propriedade: joi.number().integer().required().messages({
    "any.required": "O campo id_propriedade é obrigatorio.",
    "number.base": "O campo id_propriedade deve ser um número."
  })
})

module.exports = {
  schemasControlePesagem
}
