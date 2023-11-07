const { criptografarSenha } = require("../core/criptografia")
const { validarCpf } = require("../core/validarCpf")
const {consultaDB, cadastroDB} = require("../database/consultasDB")

const cadastrarProdutor = async(req, res) => {
  const { nome, sobrenome, cpf, email, senha } = req.body
 try {
  const checarEmail = await consultaDB("produtor", {email})
  const validacaoCpf = validarCpf(cpf)
  if (!validacaoCpf) {
    return res.status(400).json({mensagem: "Cpf invalido"})
  }
  if (checarEmail) {
   return res.status(404).json({mensagem: 'Esse email ja foi cadastrado.'})
  }
  const senhaCritografada = await criptografarSenha(senha)
  
  const produtor = {nome, sobrenome, cpf, email, senha: senhaCritografada}

  const produtorCadastrado = await cadastroDB("produtor", produtor)
  return res.status(201).json(produtorCadastrado)

 } catch (error) {
  return  res.status(500).json({ mensagem: "Erro interno do servidor." })
 }
}

module.exports = {
  cadastrarProdutor,
}
