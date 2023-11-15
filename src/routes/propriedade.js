const {Router} = require("express")
const { cadastrarPropriedade } = require("../controllers/propriedade")
const { validarCorpo } = require("../middleware/validarCorpo")
const { schemasPropriedade } = require("../validacoes/schemasPropriedade")


const rotas = Router()


rotas.post("/propriedade", validarCorpo(schemasPropriedade), cadastrarPropriedade)

module.exports = rotas
