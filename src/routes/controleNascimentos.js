const {Router} = require("express")
const {validarCorpo} = require("../middleware/validarCorpo")
const { schemasControleNascimentos } = require("../validacoes/schemasControleNascimentos")
const { cadastrarNascimento, atualizarNascimento, excluirNascimento } = require("../controllers/controleNascimentos")


const rotas = Router()


rotas.post("/controles/nascimentos", validarCorpo(schemasControleNascimentos),  cadastrarNascimento)
rotas.put("/controles/nascinentos/:id", validarCorpo(schemasControleNascimentos), atualizarNascimento)
rotas.delete("/controles/nascinentos/:id", excluirNascimento)


module.exports = rotas