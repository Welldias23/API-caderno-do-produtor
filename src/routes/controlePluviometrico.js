const {Router} = require("express")
const { validarCorpo } = require("../middleware/validarCorpo")
const { schemasControlePluviometrico } = require("../validacoes/schemasContolePluviometrico")
const {cadastrarChuva, AtualizarChuva, excluirChuva} = require("../controllers/controlePluviometrico")

const rotas = Router()

rotas.post("/controles/pluviometrico", validarCorpo(schemasControlePluviometrico), cadastrarChuva)
rotas.put("/controles/pluviometrico/:id", validarCorpo(schemasControlePluviometrico), AtualizarChuva)
rotas.delete("/controles/pluviometrico/:id", excluirChuva)

module.exports = rotas