const { cadastrarDados, atualizarDados, consultarDadosLista, excluirDados } = require("../database/consultasDB")

const cadastrarPropriedade = async (req, res) => {
    const {nome_propriedade, area_da_atividade, area_produtiva} = req.body
    const {id} = req.produtor
   try {
        const propriedade = {id_produtor:id, nome_propriedade, area_da_atividade, area_produtiva}
        const propriedadeCadastrada = await cadastrarDados("propriedade", propriedade)
        return res.status(201).json(propriedadeCadastrada)
    } catch (error) {
        return  res.status(500).json({ mensagem: "Erro interno do servidor." })
    }
}


const atualizarPropriedade = async (req, res) => {
    const id_produtor = req.produtor.id
    const {id} = req.params
    const { nome_propriedade, area_da_atividade, area_produtiva } = req.body
    try {
      const propriedades = await consultarDadosLista("propriedade", {id_produtor})
      
      if (!propriedades) {
        return res.status(404).json({mensagem: "Propriedade não encontrada."})
      }
      
      let consultarPropriedadeId = undefined

      for (let propriedadeAtual of propriedades) {
        
        if (propriedadeAtual.id == id) {
          consultarPropriedadeId = propriedadeAtual
        }
    
      }
      
      if (!consultarPropriedadeId) {
        return res.status(404).json({mensagem: "Propriedade não encontrada."})
      }
      
      const propriedadeAtualizada = {id_produtor, nome_propriedade, area_da_atividade, area_produtiva}
      
      await atualizarDados("propriedade", {id}, propriedadeAtualizada)
      
      return res.status(204).json(propriedadeAtualizada)
    } catch (error) {
      console.log(error);
      return  res.status(500).json({ mensagem: "Erro interno do servidor." })
    }
  }


  const excluirPropriedade = async (req, res) => {
    const id_produtor = req.produtor.id
    const {id} = req.params
    try {
      const propriedades = await consultarDadosLista("propriedade", {id_produtor})
      
      if (!propriedades) {
        return res.status(404).json({mensagem: "Propriedade não encontrada."})
      }
      
      let consultarPropriedadeId = undefined

      for (let propriedadeAtual of propriedades) {
        
        if (propriedadeAtual.id == id) {
          consultarPropriedadeId = propriedadeAtual
        }
    
      }
      
      if (!consultarPropriedadeId) {
        return res.status(404).json({mensagem: "Propriedade não encontrada."})
      }
  
      await excluirDados("propriedade", {id})
      
      return res.status(200).json({mensagem: `Propriedade excluida.`})
    } catch (error) {
      return  res.status(500).json({ mensagem: "Erro interno do servidor." })
    }
  }

module.exports = {
    cadastrarPropriedade,
    atualizarPropriedade,
    excluirPropriedade
}