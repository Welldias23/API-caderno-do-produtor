const {
  consultarDadosUnicos,
  cadastrarDados,
  atualizarDados,
  excluirDados
} = require("../database/consultasDB")

const cadastrarControleSecagem = async (req, res) => {
  const id_produtor = req.produtor.id
  const {
    id_animal,
    nome,
    previsao_de_parto,
    data_de_secagem,
    medicamento_utilizado,
    observacao,
    id_propriedade
  } = req.body

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

    const secagem = {
      id_animal,
      nome,
      previsao_de_parto,
      data_de_secagem,
      medicamento_utilizado,
      observacao,
      id_produtor,
      id_propriedade
    }

    const secagemCadastrado = await cadastrarDados("controle_secagens", secagem)

    return res.status(201).json(secagemCadastrado)
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor." })
  }
}

const atualizarControleSecagem = async (req, res) => {
  const id_produtor = req.produtor.id
  const { id } = req.params
  const {
    id_animal,
    nome,
    previsao_de_parto,
    data_de_secagem,
    medicamento_utilizado,
    observacao,
    id_propriedade
  } = req.body

  try {
    const validarId = await consultarDadosUnicos("controle_secagens", {
      id,
      id_propriedade
    })

    if (!validarId) {
      return res
        .status(404)
        .json({ mensagem: "Cadastro de controle de secagem não encontrado." })
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

    const secagemAtualizada = {
      id_animal,
      nome,
      previsao_de_parto,
      data_de_secagem,
      medicamento_utilizado,
      observacao,
      id_produtor,
      id_propriedade
    }
    await atualizarDados("controle_secagens", { id }, secagemAtualizada)

    return res.status(204).json(secagemAtualizada)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ mensagem: "Erro interno do servidor." })
  }
}

const excluirControleSecagem = async (req, res) => {
  const id_produtor = req.produtor.id
  const { id } = req.params
  try {
    const controleSecagem = await consultarDadosUnicos("controle_secagens", {
      id,
      id_produtor
    })

    if (!controleSecagem) {
      return res
        .status(404)
        .json({ mensagem: "Cadastro controle Secagem não encontrado." })
    }

    await excluirDados("controle_secagens", { id })

    return res
      .status(200)
      .json({ mensagem: `Cadastro de controle de secagem excluido.` })
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor." })
  }
}

module.exports = {
  cadastrarControleSecagem,
  atualizarControleSecagem,
  excluirControleSecagem
}
