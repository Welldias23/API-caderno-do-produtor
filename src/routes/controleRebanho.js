const { Router } = require("express")
const {
  schemasControleRebanho
} = require("../validacoes/schemasControleRebanho")
const { validarCorpo } = require("../middleware/validarCorpo")
const {
  cadastrarAnimal,
  atualizarAnimal,
  excluirAnimal,
  listaAnimal
} = require("../controllers/controleRebanho")

const rotas = Router()

rotas.post(
  "/controles/rebanho",
  validarCorpo(schemasControleRebanho),
  cadastrarAnimal
)
rotas.put(
  "/controles/rebanho/:id",
  validarCorpo(schemasControleRebanho),
  atualizarAnimal
)
rotas.get("/controles/rebanho/:id_propriedade", listaAnimal)
rotas.delete("/controles/rebanho/:id", excluirAnimal)

module.exports = rotas
