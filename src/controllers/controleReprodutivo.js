const {
  consultarDadosUnicos,
  cadastrarDados,
  atualizarDados,
  excluirDados
} = require("../database/consultasDB")

const cadastrarControleReprodutivo = async (req, res) => {
  const id_produtor = req.produtor.id
  const {
    id_animal,
    nome,
    data_hora_do_cio,
    data_hora_da_inseminacao_monta,
    nome_touro,
    inseminador,
    prenhe,
    previsao_de_parto,
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

    const controleReprodutivo = {
      id_animal,
      nome,
      data_hora_do_cio,
      data_hora_da_inseminacao_monta,
      nome_touro,
      inseminador,
      prenhe,
      previsao_de_parto,
      observacao,
      id_produtor,
      id_propriedade
    }

    const controleReprodutivoCadastrado = await cadastrarDados(
      "controle_reprodutivo",
      controleReprodutivo
    )

    return res.status(201).json(controleReprodutivoCadastrado)
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor." })
  }
}

const atualizarControleReprodutivo = async (req, res) => {
  const id_produtor = req.produtor.id
  const { id } = req.params
  const {
    id_animal,
    nome,
    data_hora_do_cio,
    data_hora_da_inseminacao_monta,
    nome_touro,
    inseminador,
    prenhe,
    previsao_de_parto,
    observacao,
    id_propriedade
  } = req.body

  try {
    const validarId = await consultarDadosUnicos("controle_reprodutivo", {
      id,
      id_propriedade
    })

    if (!validarId) {
      return res
        .status(404)
        .json({ mensagem: "Cadastro de controle_reprodutivo não encontrado." })
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

    const controleReprodutivoaAtualizado = {
      id_animal,
      nome,
      data_hora_do_cio,
      data_hora_da_inseminacao_monta,
      nome_touro,
      inseminador,
      prenhe,
      previsao_de_parto,
      observacao,
      id_produtor,
      id_propriedade
    }
    await atualizarDados(
      "controle_reprodutivo",
      { id },
      controleReprodutivoaAtualizado
    )

    return res.status(204).json(controleReprodutivoaAtualizado)
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor." })
  }
}

const excluirControleReprodutivo = async (req, res) => {
  const id_produtor = req.produtor.id
  const { id } = req.params
  try {
    const controleReprodutivo = await consultarDadosUnicos(
      "controle_reprodutivo",
      {
        id,
        id_produtor
      }
    )

    if (!controleReprodutivo) {
      return res
        .status(404)
        .json({ mensagem: "Cadastro controle Reprodutivo não encontrado." })
    }

    await excluirDados("controle_reprodutivo", { id })

    return res
      .status(200)
      .json({ mensagem: `Cadastro de controle_reprodutivo excluido.` })
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor." })
  }
}

module.exports = {
  cadastrarControleReprodutivo,
  atualizarControleReprodutivo,
  excluirControleReprodutivo
}
