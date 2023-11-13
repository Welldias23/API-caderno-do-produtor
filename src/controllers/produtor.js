const { criptografarSenha, compararSenha } = require("../core/criptografia")
const { gerarToken } = require("../core/jwt")
const { validarCpf } = require("../core/validarCpf")
const {consultaDB, cadastroDB} = require("../database/consultasDB")

const cadastrarProdutor = async(req, res) => {
  const { nome, sobrenome, cpf, email, senha } = req.body
 try {
  const validacaoCpf = validarCpf(cpf)
  if (!validacaoCpf) {
    return res.status(400).json({mensagem: "Cpf invalido"})
  }
  const checarCpf = await consultaDB("produtor", {cpf})
  
  if (checarCpf) {
   return res.status(404).json({mensagem: 'Esse cpf ja foi cadastrado.'})
  }
  const checarEmail = await consultaDB("produtor", {email})
  
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

const logarProdutor = async(req, res) => {
  const {email, senha} = req.body

  try {
    const produtor = await consultaDB("produtor", {email})
  
    if (!produtor) {
     return res.status(404).json({mensagem: 'Email ou senha invalidos.'})
    }

    const checarSenha = await compararSenha(senha, produtor.senha) 

    if (!checarSenha) {
      return res.status(404).json({mensagem: 'Email ou senha invalidos.'})
    }
    
    delete produtor.senha
    
    const token = gerarToken(produtor, "1h")


    return res.status(200).json({produtor, token})
    
  } catch (error) {
    return  res.status(500).json({ mensagem: "Erro interno do servidor." })
  }

}

const detalharProdutor = (req, res) => {
  const produtor = req.produtor
  return res.status(200).json(produtor)
}

module.exports = {
  cadastrarProdutor,
  logarProdutor, 
  detalharProdutor
}
