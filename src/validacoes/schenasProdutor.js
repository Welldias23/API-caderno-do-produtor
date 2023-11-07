const joi = require('joi')

const schemasProdutor = joi.object({
  nome: joi.string().required().messages({
    'any.required': 'O campo nome é obrigatorio.',
    'string.base': 'O nome precisa ser string.',
  }),
  sobrenome: joi.string().required().messages({
    'any.required': 'O campo sobrenome é obrigatorio.',
    'string.base': 'O sobrenome precisa ser string.',
  }),
  cpf: joi.string().min(11).required().messages({
    'any.required': 'O campo cpf é obrigatorio.',
    'string.min': 'A cpf precisa ter no minimo 11 caracteres.',
    'string.base': 'O cpf precisa ser string.',
  }),
  email: joi.string().email().messages({
    'any.required': 'O campo email é obrigatorio.',
    'string.email': 'Email invalido.',
  }),
  senha: joi.string().min(6).required().messages({
    'any.required': 'O campo senha é obrigatorio.',
    'string.min': 'A senha precisa ter no minimo 6 caracteres.',
  }),
})

module.exports = {
  schemasProdutor,
}
