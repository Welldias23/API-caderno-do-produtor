const { Router } = require('express')
const { cadastrarProdutor } = require('../controllers/produtor')
const { schemasProdutor } = require('../validacoes/schenasProdutor')
const { validarCorpo } = require('../middleware/produtor')

const rotas = Router()

rotas.post('/produtor', validarCorpo(schemasProdutor), cadastrarProdutor)

module.exports = rotas
