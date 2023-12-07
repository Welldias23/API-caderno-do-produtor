const { consultarDadosUnicos, cadastrarDados, atualizarDados, excluirDados } = require("../database/consultasDB")


const cadastrarNascimento = async (req, res) => {
    const id_produtor = req.produtor.id
    const {id_animal, nome, data, sexo, id_pai, id_mae, peso, observacao, id_propriedade} = req.body
   
     try {
        const validarIdAnimal = await consultarDadosUnicos("controle_rebanho", {id_animal, id_propriedade})

        if (validarIdAnimal) {
            return res.status(404).json({mensagem: "Esse id ja esta cadastrado na sua propriedade."})
        }

        if (sexo[0].toUpperCase() !== "F" || sexo[0].toUpperCase() !== "S") {
            return res.status(400).json({mensagem: "O sexo informado não é valido."})
        }

        const validarMae = await consultarDadosUnicos("controle_rebanho", {id_animal: id_mae, id_propriedade})

        if (!validarMae) {
            return res.status(404).json({mensagem: "O id_mae não foi encontrado na sua propriedade."})
        }

        const propriedade = await consultarDadosUnicos("propriedade", {id: id_propriedade, id_produtor})
        if (!propriedade) {
          return res.status(404).json({mensagem: "Propriedade não encontrada."})
        }

        const nascimento = {id_animal, nome, data, sexo: sexo[0].toUpperCase, id_pai, id_mae, peso, observacao, id_propriedade}
        const nascimentoCadastrada = await cadastrarDados("controle_nascimentos", nascimento)
        return res.status(201).json(nascimentoCadastrada)
    } catch (error) {
        return  res.status(500).json({ mensagem: "Erro interno do servidor." })
    }
}


  const atualizarNascimento = async (req, res) => {
    const id_produtor = req.produtor.id
    const {id} = req.params
    const { id_animal, nome, data, sexo, id_pai, id_mae, peso, observacao, id_propriedade } = req.body
   
      try {

        const validarId = await consultarDadosUnicos("controle_nascimentos", {id, id_animal, id_produtor, id_propriedade})

        if (!validarId) {
            return res.status(404).json({mensagem: "Cadastro de nascimento não encontrado."})
        }

        const validarIdAnimal = await consultarDadosUnicos("controle_rebanho", {id_animal, id_propriedade})

        if (validarIdAnimal || validarIdAnimal.id !== id) {
            return res.status(404).json({mensagem: "Esse id_animal ja esta cadastrado na sua propriedade."})
        }

        if (sexo[0].toUpperCase() !== "F" || sexo[0].toUpperCase() !== "S") {
            return res.status(400).json({mensagem: "O sexo informado não é valido."})
        }

        const validarMae = await consultarDadosUnicos("controle_rebanho", {id_animal: id_mae, id_propriedade})

        if (!validarMae) {
            return res.status(404).json({mensagem: "O id_mae não foi encontrado na sua propriedade."})
        }

        const propriedade = await consultarDadosUnicos("propriedade", {id: id_propriedade, id_produtor})
        if (!propriedade) {
          return res.status(404).json({mensagem: "Propriedade não encontrada."})
        } 

        const nascimentoAtualizado = {id_animal, nome, data, sexo: sexo[0].toUpperCase, id_pai, id_mae, peso, observacao, id_propriedade}

        await atualizarDados("controle_nascimentos", {id}, nascimentoAtualizado)
        
        return res.status(204).json(nascimentoAtualizado)
      } catch (error) {
        return  res.status(500).json({ mensagem: "Erro interno do servidor." })
      }
    }



const excluirNascimento = async (req, res) => {
    const id_produtor = req.produtor.id
    const {id} = req.params
    try {
        const nascimento = await consultarDadosUnicos("controle_nascimentos", {id, id_produtor})
    
        if (!nascimento) {
            return res.status(404).json({mensagem: "Cadastro de nascimento não encontrado."})
        }
    
        await excluirDados("controle_nascimentos", {id})
          
        return res.status(200).json({mensagem: `Cadastro de nascimentos diaria excluido.`})
    } catch (error) {
        return  res.status(500).json({ mensagem: "Erro interno do servidor." })
    }
} 
  

  module.exports = {
    cadastrarNascimento, 
    atualizarNascimento,
    excluirNascimento
  }