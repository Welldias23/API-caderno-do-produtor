const { Router } = require('express')
const { cadastrarProdutor, logarProdutor } = require('../controllers/produtor')
const { schemasProdutor } = require('../validacoes/schemasProdutor')
const { validarCorpo } = require('../middleware/produtor')
const { schemasLoginProdutor } = require('../validacoes/schemasLoginProdutor')

const rotas = Router()

rotas.post('/produtor', validarCorpo(schemasProdutor), cadastrarProdutor)
rotas.post('/login', validarCorpo(schemasLoginProdutor), logarProdutor)

module.exports = rotas
