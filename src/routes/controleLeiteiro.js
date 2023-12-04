const {Router} = require("express")
const { validarCorpo } = require("../middleware/validarCorpo")
const { schemasControleLeiteiro } = require("../validacoes/schemasControleLeitero")
const { cadastrarProducaoDia, atualizarProducaoDia, excluirProducaoDia } = require("../controllers/controleLeiteiro")


const rotas = Router()

rotas.post("/controles/leiteiro", validarCorpo(schemasControleLeiteiro), cadastrarProducaoDia)
rotas.put("/controles/leiteiro/:id", validarCorpo(schemasControleLeiteiro), atualizarProducaoDia)
rotas.delete("/controles/leiteiro/:id", excluirProducaoDia)
 
module.exports = rotas