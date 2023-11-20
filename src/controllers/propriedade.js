const { cadastrarDados, consultarDados, atualizarDados } = require("../database/consultasDB")

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
    const {id} = req.produtor
    const { nome_propriedade, area_da_atividade, area_produtiva } = req.body
    try {
      const propriedade = await consultarDados("propriedade", {id_produtor: id})
  
      if (!propriedade) {
        return res.status(404).json({mensagem: "Propriedade não encontrado."})
      }
      
      await atualizarDados("propriedade", {id}, propriedadeAtualizado)
      
      return res.status(204).json(propriedadeAtualizado)
    } catch (error) {
      return  res.status(500).json({ mensagem: "Erro interno do servidor." })
    }
  }

module.exports = {
    cadastrarPropriedade,
    atualizarPropriedade
}