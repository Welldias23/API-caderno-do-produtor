const { Router } = require("express")
const { validarCorpo } = require("../middleware/validarCorpo")
const {
  schemasControlePesagem
} = require("../validacoes/schemasControlePesagem")
const {
  cadastrarPesagem,
  atualizarPesagem,
  excluirPesagem
} = require("../controllers/controlePesagens")

const rotas = Router

rotas.post(
  "/controles/pesagem",
  validarCorpo(schemasControlePesagem),
  cadastrarPesagem
)
rotas.put(
  "/controles/pesagem/:id",
  validarCorpo(schemasControlePesagem),
  atualizarPesagem
)
rotas.delete("/controles/pesagem/:id", excluirPesagem)

module.exports = rotas
