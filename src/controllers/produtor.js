const { criptografarSenha, compararSenha } = require("../core/criptografia")
const { gerarToken } = require("../core/jwt")
const { validarCpf } = require("../core/validarCpf")
const { consultarDados, cadastrarDados, atualizarDados, excluirDados } = require("../database/consultasDB")

const cadastrarProdutor = async(req, res) => {
  const { nome, sobrenome, cpf, email, senha } = req.body
 try {
  const validacaoCpf = validarCpf(cpf)
  if (!validacaoCpf) {
    return res.status(400).json({mensagem: "Cpf invalido"})
  }
  const checarCpf = await consultarDados("produtor", {cpf})
  
  if (checarCpf) {
   return res.status(404).json({mensagem: 'Esse cpf ja foi cadastrado.'})
  }
  const checarEmail = await consultarDados("produtor", {email})
  
  if (checarEmail) {
   return res.status(404).json({mensagem: 'Esse email ja foi cadastrado.'})
  }
  const senhaCritografada = await criptografarSenha(senha)
  
  const produtor = {nome, sobrenome, cpf, email, senha: senhaCritografada}

  const produtorCadastrado = await cadastrarDados("produtor", produtor)
  delete produtorCadastrado.senha
  
  return res.status(201).json(produtorCadastrado)

 } catch (error) {
  return  res.status(500).json({ mensagem: "Erro interno do servidor." })
 }
}

const logarProdutor = async(req, res) => {
  const {email, senha} = req.body

  try {
    const produtor = await consultarDados("produtor", {email})
  
    if (!produtor) {
     return res.status(404).json({mensagem: 'Email ou senha invalidos.'})
    }

    const checarSenha = await compararSenha(senha, produtor.senha) 

    if (!checarSenha) {
      return res.status(404).json({mensagem: 'Email ou senha invalidos.'})
    }
    
    delete produtor.senha
    
    const token = gerarToken({id: produtor.id}, "1h")
    
    return res.status(200).json({produtor, token})
    
  } catch (error) {
    return  res.status(500).json({ mensagem: "Erro interno do servidor." })
  }

}

const detalharProdutor = async (req, res) => {
  const {id} = req.produtor
  try {
    const produtor = await consultarDados("produtor", {id})

    if (!produtor) {
      return res.status(404).json({mensagem: "Produtor não encontrado."})
    }

    return res.status(200).json(produtor)
  } catch (error) {
    return  res.status(500).json({ mensagem: "Erro interno do servidor." })
  }
}


const atualizarProdutor = async (req, res) => {
  const {id} = req.produtor
  const { nome, sobrenome, cpf, email, senha } = req.body
  try {
    const produtor = await consultarDados("produtor", {id})

    if (!produtor) {
      return res.status(404).json({mensagem: "Produtor não encontrado."})
    }

    const validacaoCpf = validarCpf(cpf)

    if (!validacaoCpf) {
      return res.status(400).json({mensagem: "Cpf invalido"})
    }

    const checarCpf = await consultarDados("produtor", {cpf})
    
    if (checarCpf && checarCpf.id !== id) {
    return res.status(404).json({mensagem: 'Esse cpf ja foi cadastrado.'})
    }
    const checarEmail = await consultarDados("produtor", {email})
    
    if (checarEmail && checarEmail.id !== id) {
    return res.status(404).json({mensagem: 'Esse email ja foi cadastrado.'})
    }
    const senhaCritografada = await criptografarSenha(senha)
    
    const produtorAtualizado = {nome, sobrenome, cpf, email, senha: senhaCritografada}
    
    await atualizarDados("produtor", {id}, produtorAtualizado)
    
    return res.status(204).json(produtorAtualizado)
  } catch (error) {
    return  res.status(500).json({ mensagem: "Erro interno do servidor." })
  }
}


const excluirProdutor = async (req, res) => {
  const {id} = req.produtor
  try {
    const produtorExcluido = await consultarDados("produtor", {id})

    if (!produtorExcluido) {
      return res.status(404).json({mensagem: "Produtor não encontrado."})
    }

    await excluirDados("produtor", {id})
    
    return res.status(200).json({mensagem: `O cadastro do produtor ${produtorExcluido.nome} ${produtorExcluido.sobrenome} foi excluido.`})
  } catch (error) {
    return  res.status(500).json({ mensagem: "Erro interno do servidor." })
  }
}

module.exports = {
  cadastrarProdutor,
  logarProdutor, 
  detalharProdutor,
  atualizarProdutor,
  excluirProdutor
}
