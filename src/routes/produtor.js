const { Router } = require('express')
const { cadastrarProdutor, logarProdutor, detalharProdutor } = require('../controllers/produtor')
const { schemasProdutor } = require('../validacoes/schemasProdutor')
const { validarCorpo } = require('../middleware/produtor')
const { schemasLoginProdutor } = require('../validacoes/schemasLoginProdutor')
const validarToken = require('../middleware/validarToken')

const rotas = Router()

rotas.post('/produtor', validarCorpo(schemasProdutor), cadastrarProdutor)
rotas.post('/login', validarCorpo(schemasLoginProdutor), logarProdutor)
 
rotas.use(validarToken)

rotas.get("/produtor", detalharProdutor)

module.exports = rotas
