const { Router } = require('express')
const { cadastrarProdutor, logarProdutor, detalharProdutor, atualizarProdutor, excluirProdutor } = require('../controllers/produtor')
const { schemasProdutor } = require('../validacoes/schemasProdutor')
const { validarCorpo } = require('../middleware/validarCorpo')
const { schemasLoginProdutor } = require('../validacoes/schemasLoginProdutor')
const validarToken = require('../middleware/validarToken')

const rotas = Router()

rotas.post('/produtor', validarCorpo(schemasProdutor), cadastrarProdutor)
rotas.post('/login', validarCorpo(schemasLoginProdutor), logarProdutor)
 
rotas.use(validarToken)

rotas.get("/produtor", detalharProdutor)
rotas.put("/produtor", validarCorpo(schemasProdutor), atualizarProdutor)
rotas.delete("/produtor", excluirProdutor)

module.exports = rotas
