const {Router} = require("express")
const { cadastrarPropriedade, atualizarPropriedade } = require("../controllers/propriedade")
const { validarCorpo } = require("../middleware/validarCorpo")
const { schemasPropriedade } = require("../validacoes/schemasPropriedade")


const rotas = Router()


rotas.post("/propriedade", validarCorpo(schemasPropriedade), cadastrarPropriedade)
rotas.put("/propriedade", validarCorpo(schemasPropriedade), atualizarPropriedade)

module.exports = rotas
