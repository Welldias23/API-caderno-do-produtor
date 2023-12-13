const {
  consultarDadosUnicos,
  cadastrarDados,
  atualizarDados,
  excluirDados
} = require("../database/consultasDB")

const cadastrarProducaoDia = async (req, res) => {
  const id_produtor = req.produtor.id
  const {
    id_propriedade,
    data,
    industria,
    consumo_familiar,
    consumo_bezerros,
    descarte
  } = req.body

  try {
    const propriedade = await consultarDadosUnicos("propriedade", {
      id: id_propriedade,
      id_produtor
    })
    if (!propriedade) {
      return res.status(404).json({ mensagem: "Propriedade não encontrada." })
    }

    const producao = {
      id_produtor,
      id_propriedade,
      data,
      industria,
      consumo_familiar,
      consumo_bezerros,
      descarte
    }
    const producaoCadastrada = await cadastrarDados(
      "controle_leiteiro",
      producao
    )
    return res.status(201).json(producaoCadastrada)
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor." })
  }
}

const atualizarProducaoDia = async (req, res) => {
  const id_produtor = req.produtor.id
  const { id } = req.params
  const {
    id_propriedade,
    data,
    industria,
    consumo_familiar,
    consumo_bezerros,
    descarte
  } = req.body

  try {
    const propriedade = await consultarDadosUnicos("propriedade", {
      id: id_propriedade,
      id_produtor
    })

    if (!propriedade) {
      return res.status(404).json({ mensagem: "Propriedade não encontrada." })
    }

    const producao = await consultarDadosUnicos("controle_leiteiro", {
      id,
      id_propriedade
    })

    if (!producao) {
      return res
        .status(404)
        .json({ mensagem: "Cadastro de producão diaria não encontrado." })
    }

    const producaoAtualizada = {
      id_propriedade,
      data,
      industria,
      consumo_familiar,
      consumo_bezerros,
      descarte
    }

    await atualizarDados("controle_leiteiro", { id }, producaoAtualizada)

    return res.status(204).json(producaoAtualizada)
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor." })
  }
}

const excluirProducaoDia = async (req, res) => {
  const id_produtor = req.produtor.id
  const { id } = req.params
  try {
    const producao = await consultarDadosUnicos("controle_leiteiro", {
      id,
      id_produtor
    })

    if (!producao) {
      return res
        .status(404)
        .json({ mensagem: "Cadastro de producão diaria não encontrado." })
    }

    await excluirDados("controle_leiteiro", { id })

    return res
      .status(200)
      .json({ mensagem: `Cadastro de producão diaria excluido.` })
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor." })
  }
}

module.exports = {
  cadastrarProducaoDia,
  atualizarProducaoDia,
  excluirProducaoDia
}
