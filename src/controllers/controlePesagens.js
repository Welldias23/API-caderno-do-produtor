const {
  consultarDadosUnicos,
  cadastrarDados,
  atualizarDados,
  excluirDados
} = require("../database/consultasDB")

const cadastrarPesagem = async (req, res) => {
  const id_produtor = req.produtor.id
  const { id_animal, nome, data_pesagem, apta_reroducao, id_propriedade } =
    req.body

  try {
    const validarIdAnimal = await consultarDadosUnicos("controle_rebanho", {
      id_animal,
      id_propriedade
    })

    if (!validarIdAnimal) {
      return res.status(404).json({
        mensagem: "Esse id_animal não esta cadastrado na sua propriedade."
      })
    }

    const propriedade = await consultarDadosUnicos("propriedade", {
      id: id_propriedade,
      id_produtor
    })

    if (!propriedade) {
      return res.status(404).json({ mensagem: "Propriedade não encontrada." })
    }

    const pesagem = {
      id_animal,
      nome,
      data_pesagem,
      apta_reroducao,
      id_produtor,
      id_propriedade
    }

    const pesagemCadastrada = await cadastrarDados("controle_pesagens", pesagem)

    return res.status(201).json(pesagemCadastrada)
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor." })
  }
}

const atualizarPesagem = async (req, res) => {
  const id_produtor = req.produtor.id
  const { id } = req.params
  const { id_animal, nome, data_pesagem, apta_reroducao, id_propriedade } =
    req.body

  try {
    const validarId = await consultarDadosUnicos("controle_pesagens", {
      id,
      id_propriedade
    })

    if (!validarId) {
      return res
        .status(404)
        .json({ mensagem: "Cadastro de controle de pesagem não encontrado." })
    }

    const validarIdAnimal = await consultarDadosUnicos("controle_rebanho", {
      id_animal,
      id_propriedade
    })

    if (!validarIdAnimal) {
      return res.status(404).json({
        mensagem: "Esse id_animal não esta cadastrado na sua propriedade."
      })
    }

    const propriedade = await consultarDadosUnicos("propriedade", {
      id: id_propriedade,
      id_produtor
    })
    if (!propriedade) {
      return res.status(404).json({ mensagem: "Propriedade não encontrada." })
    }

    const pesagemAtualizada = {
      id_animal,
      nome,
      data_pesagem,
      apta_reroducao,
      id_produtor,
      id_propriedade
    }
    await atualizarDados("controle_pesagens", { id }, pesagemAtualizada)

    return res.status(204).json(pesagemAtualizada)
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor." })
  }
}

const excluirPesagem = async (req, res) => {
  const id_produtor = req.produtor.id
  const { id } = req.params
  try {
    const pesagem = await consultarDadosUnicos("controle_pesagens", {
      id,
      id_produtor
    })

    if (!pesagem) {
      return res
        .status(404)
        .json({ mensagem: "Cadastro da pesagem não encontrado." })
    }

    await excluirDados("controle_pesagens", { id })

    return res.status(200).json({ mensagem: `Cadastro da pesagem excluido.` })
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor." })
  }
}

module.exports = {
  cadastrarPesagem,
  atualizarPesagem,
  excluirPesagem
}
