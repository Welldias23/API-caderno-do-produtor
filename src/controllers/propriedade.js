const { cadastroDB } = require("../database/consultasDB")

const cadastrarPropriedade = async (req, res) => {
    const {nome_propriedade} = req.body
    const {id} = req.produtor
   try {
        const propriedade = {id_produtor:id, nome_propriedade}
        const propriedadeCadastrada = await cadastroDB("propriedade", propriedade)
        return res.status(201).json(propriedadeCadastrada)
    } catch (error) {
        return  res.status(500).json({ mensagem: "Erro interno do servidor." })
    }
}

module.exports = {
    cadastrarPropriedade
}