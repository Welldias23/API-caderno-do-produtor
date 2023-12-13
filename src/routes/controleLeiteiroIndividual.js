const { Router } = require("express")
const {
  cadastrarProducaoIdividual,
  atualizarProducaoIndividual,
  excluirProducaoindividual
} = require("../controllers/controleLeiteiroIndividual")
const { validarCorpo } = require("../middleware/validarCorpo")
const {
  schemasControleLeiteiroIndividual
} = require("../validacoes/schemasControleLeiteiroIndividual")

const rotas = Router()

rotas.post(
  "/controles/leiteiro/individual",
  validarCorpo(schemasControleLeiteiroIndividual),
  cadastrarProducaoIdividual
)
rotas.put(
  "/controles/leiteiro/individual/:id",
  validarCorpo(schemasControleLeiteiroIndividual),
  atualizarProducaoIndividual
)
rotas.delete("/controles/leiteiro/individual/:id", excluirProducaoindividual)

module.exports = rotas
