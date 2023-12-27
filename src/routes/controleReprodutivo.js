const { Router } = require("express")
const { validarCorpo } = require("../middleware/validarCorpo")
const {
  schemasControleReprodutivo
} = require("../validacoes/schemasControleReprodutivo")
const {
  cadastrarControleReprodutivo,
  atualizarControleReprodutivo,
  excluirControleReprodutivo
} = require("../controllers/controleReprodutivo")

const rotas = Router()

rotas.post(
  "/controles/reprodutivo",
  validarCorpo(schemasControleReprodutivo),
  cadastrarControleReprodutivo
)
rotas.put(
  "/controles/reprodutivo/:id",
  validarCorpo(schemasControleReprodutivo),
  atualizarControleReprodutivo
)
rotas.delete("/controles/reprodutivo/:id", excluirControleReprodutivo)

module.exports = rotas
