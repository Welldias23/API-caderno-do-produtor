const { Router } = require("express")
const {
  cadastrarPropriedade,
  atualizarPropriedade,
  excluirPropriedade
} = require("../controllers/propriedade")
const { validarCorpo } = require("../middleware/validarCorpo")
const { schemasPropriedade } = require("../validacoes/schemasPropriedade")

const rotas = Router()

rotas.post(
  "/propriedade",
  validarCorpo(schemasPropriedade),
  cadastrarPropriedade
)
rotas.put(
  "/propriedade/:id",
  validarCorpo(schemasPropriedade),
  atualizarPropriedade
)
rotas.delete("/propriedade/:id", excluirPropriedade)

module.exports = rotas
