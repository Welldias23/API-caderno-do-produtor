const joi = require('joi')

const schemasPropriedade = joi.object({
  nome_propriedade: joi.string().required().messages({
    'any.required': 'O campo nome_propriedade é obrigatorio.',
    'string.base': 'O nome_propriedade precisa ser string.',
  })

})

module.exports = {
  schemasPropriedade
}