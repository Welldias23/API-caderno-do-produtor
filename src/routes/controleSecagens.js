const { Router } = require("express")
const { validarCorpo } = require("../middleware/validarCorpo")
const {
  schemasControleSecagens
} = require("../validacoes/schemasControleSecagem")
const {
  cadastrarControleSecagem,
  atualizarControleSecagem,
  excluirControleSecagem
} = require("../controllers/controleSecagens")

const rotas = Router()

rotas.post(
  "/controles/secagem",
  validarCorpo(schemasControleSecagens),
  cadastrarControleSecagem
)
rotas.put(
  "/controles/secagem/:id",
  validarCorpo(schemasControleSecagens),
  atualizarControleSecagem
)
rotas.delete("/controles/secagem/:id", excluirControleSecagem)

module.exports = rotas
