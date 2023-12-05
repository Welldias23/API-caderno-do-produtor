const { consultarDadosUnicos, cadastrarDados, atualizarDados, excluirDados } = require("../database/consultasDB")


const cadastrarProducaoIdividual = async (req, res) => {
    const id_produtor = req.produtor.id
    const {id_vaca, id_propriedade, data, lote, producao_manha, producao_tarde} = req.body
    
     try {
          const vaca = await consultarDadosUnicos("controle_rebanho", {id: id_vaca})
          if (!vaca) {
            return res.status(404).json({mensagem: "O Id do animal informado não foi encontrada."})
          }

          const propriedade = await consultarDadosUnicos("propriedade", {id: id_propriedade, id_produtor})
          if (!propriedade) {
              return res.status(404).json({mensagem: "Propriedade não encontrada."})
          }

          const producao = {id_produtor, id_vaca, id_propriedade, data, lote, producao_manha, producao_tarde}
          const producaoCadastrada = await cadastrarDados("controle_leiteiro_individual", producao)
          return res.status(201).json(producaoCadastrada)
      } catch (error) {
          return  res.status(500).json({ mensagem: "Erro interno do servidor." })
      }
}


const atualizarProducaoIndividual = async (req, res) => {
    const id_produtor = req.produtor.id
    const {id} = req.params
    const { id_vaca, id_propriedade, data, lote, producao_manha, producao_tarde } = req.body
   
      try {
        const vaca = await consultarDadosUnicos("controle_rebanho", {id: id_vaca})
          if (!vaca) {
            return res.status(404).json({mensagem: "O Id do animal informado não foi encontrada."})
          } 

        const propriedade = await consultarDadosUnicos("propriedade", {id: id_propriedade, id_produtor})
        
        if (!propriedade) {
          return res.status(404).json({mensagem: "Propriedade não encontrada."})
        }
       
        const producao = await consultarDadosUnicos("controle_leiteiro_individual", {id, id_propriedade})
  
        if (!producao) {
          return res.status(404).json({mensagem: "Cadastro de producão individual não encontrado."})
        }
        
        const producaoAtualizada = {id_vaca, id_propriedade, data, lote, producao_manha, producao_tarde}
        
        await atualizarDados("controle_leiteiro_individual", {id}, producaoAtualizada)
        
        return res.status(204).json(producaoAtualizada)
      } catch (error) {
        return  res.status(500).json({ mensagem: "Erro interno do servidor." })
      }
    }


    const excluirProducaoindividual = async (req, res) => {
        const id_produtor = req.produtor.id
        const {id} = req.params
        try {
            const producao = await consultarDadosUnicos("controle_leiteiro_individual", {id, id_produtor})
        
            if (!producao) {
                return res.status(404).json({mensagem: "Cadastro de producão individual não encontrado."})
            }
        
            await excluirDados("controle_leiteiro_individual", {id})
              
            return res.status(200).json({mensagem: `Cadastro de producão individual excluido.`})
        } catch (error) {
            return  res.status(500).json({ mensagem: "Erro interno do servidor." })
        }
    } 

module.exports = {
    cadastrarProducaoIdividual,
    atualizarProducaoIndividual,
    excluirProducaoindividual
}