const { cadastrarDados, consultarDadosUnicos, atualizarDados, excluirDados } = require("../database/consultasDB")

const cadastrarChuva = async (req, res) => {
  const id_produtor = req.produtor.id
  const {id_propriedade, data_chuva, volume_de_chuva} = req.body
  
   try {
        const propriedade = await consultarDadosUnicos("propriedade", {id: id_propriedade})
        if (!propriedade) {
            return res.status(404).json({mensagem: "Propriedade não encontrada."})
        }
        if (propriedade.id_produtor !== id_produtor) {
            return res.status(404).json({mensagem: "Propriedade não encontrada."})
        }
        const chuva = {id_produtor, id_propriedade, data_chuva, volume_de_chuva}
        const chuvaCadastrada = await cadastrarDados("controle_pluviometrico", chuva)
        return res.status(201).json(chuvaCadastrada)
    } catch (error) {
        console.log(error);
        return  res.status(500).json({ mensagem: "Erro interno do servidor." })
    }
}


const AtualizarChuva = async (req, res) => {
  const id_produtor = req.produtor.id
  const {id} = req.params
  const { id_propriedade, data_chuva, volume_de_chuva } = req.body
 
    try {
      const propriedade = await consultarDadosUnicos("propriedade", {id: id_propriedade, id_produtor})
      
      if (!propriedade) {
        return res.status(404).json({mensagem: "Propriedade não encontrada."})
      }
     
      const chuva = await consultarDadosUnicos("controle_pluviometrico", {id, id_propriedade})

      if (!chuva) {
        return res.status(404).json({mensagem: "Cadastro de chuva não encontrado."})
      }
      
      const chuvaAtualizada = {id_produtor, id_propriedade, data_chuva, volume_de_chuva}
      
      await atualizarDados("controle_pluviometrico", {id}, chuvaAtualizada)
      
      return res.status(204).json(chuvaAtualizada)
    } catch (error) {
      return  res.status(500).json({ mensagem: "Erro interno do servidor." })
    }
  }


  const excluirChuva = async (req, res) => {
    const id_produtor = req.produtor.id
    const {id} = req.params
    try {
      const chuva = await consultarDadosUnicos("controle_pluviometrico", {id, id_produtor})

      if (!chuva) {
        return res.status(404).json({mensagem: "Cadastro de chuva não encontrado."})
      }

      await excluirDados("controle_pluviometrico", {id})
      
      return res.status(200).json({mensagem: `Cadastro de chuva excluido.`})
    } catch (error) {
      return  res.status(500).json({ mensagem: "Erro interno do servidor." })
    }
  } 


module.exports = {
    cadastrarChuva,
    AtualizarChuva,
    excluirChuva
}