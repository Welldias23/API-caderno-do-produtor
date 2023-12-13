const {
  consultarDadosUnicos,
  cadastrarDados,
  atualizarDados,
  excluirDados,
  consultarDadosLista
} = require("../database/consultasDB")

const cadastrarAnimal = async (req, res) => {
  const id_produtor = req.produtor.id
  const {
    id_animal,
    nome,
    data_nascimento,
    sexo,
    id_pai,
    id_mae,
    peso,
    observacao,
    id_propriedade
  } = req.body

  try {
    const validarIdAnimal = await consultarDadosUnicos("controle_rebanho", {
      id_animal,
      id_propriedade
    })

    if (validarIdAnimal) {
      return res
        .status(404)
        .json({ mensagem: "Esse id ja esta cadastrado na sua propriedade." })
    }

    if (sexo[0].toUpperCase() !== "F" && sexo[0].toUpperCase() !== "M") {
      return res
        .status(400)
        .json({ mensagem: "O sexo informado não é valido." })
    }

    const propriedade = await consultarDadosUnicos("propriedade", {
      id: id_propriedade,
      id_produtor
    })
    if (!propriedade) {
      return res.status(404).json({ mensagem: "Propriedade não encontrada." })
    }

    const animal = {
      id_animal,
      nome,
      data_nascimento,
      sexo: sexo[0].toUpperCase(),
      id_pai,
      id_mae,
      peso,
      observacao,
      id_produtor,
      id_propriedade
    }

    const animalCadastrada = await cadastrarDados("controle_rebanho", animal)
    return res.status(201).json(animalCadastrada)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ mensagem: "Erro interno do servidor." })
  }
}

const atualizarAnimal = async (req, res) => {
  const id_produtor = req.produtor.id
  const { id } = req.params
  const {
    id_animal,
    nome,
    data_nascimento,
    sexo,
    id_pai,
    id_mae,
    peso,
    observacao,
    id_propriedade
  } = req.body

  try {
    const validarId = await consultarDadosUnicos("controle_rebanho", {
      id,
      id_animal,
      id_produtor,
      id_propriedade
    })

    if (!validarId) {
      return res
        .status(404)
        .json({ mensagem: "Cadastro de animal não encontrado." })
    }

    const validarIdAnimal = await consultarDadosUnicos("controle_rebanho", {
      id_animal,
      id_propriedade
    })

    if (validarIdAnimal && validarIdAnimal.id != id) {
      return res.status(404).json({
        mensagem: "Esse id_animal ja esta cadastrado na sua propriedade."
      })
    }

    if (sexo[0].toUpperCase() !== "F" && sexo[0].toUpperCase() !== "M") {
      return res
        .status(400)
        .json({ mensagem: "O sexo informado não é valido." })
    }

    const propriedade = await consultarDadosUnicos("propriedade", {
      id: id_propriedade,
      id_produtor
    })
    if (!propriedade) {
      return res.status(404).json({ mensagem: "Propriedade não encontrada." })
    }

    const animalAtualizado = {
      id_animal,
      nome,
      data_nascimento,
      sexo: sexo[0].toUpperCase(),
      id_pai,
      id_mae,
      peso,
      observacao,
      id_propriedade
    }

    await atualizarDados("controle_rebanho", { id }, animalAtualizado)

    return res.status(204).json(animalAtualizado)
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor." })
  }
}

const listaAnimal = async (req, res) => {
  const id_produtor = req.produtor.id
  const id_propriedade = req.params.id_propriedade

  try {
    const propriedade = await consultarDadosUnicos("propriedade", {
      id: id_propriedade,
      id_produtor
    })
    if (!propriedade) {
      return res.status(404).json({ mensagem: "Propriedade não encontrada." })
    }

    const animais = await consultarDadosLista("controle_rebanho", {
      id_produtor,
      id_propriedade
    })

    if (!animais) {
      res.status(404).json({ mensagem: "Nenhum animal cadastrado." })
    }

    return res.status(200).json(animais)
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor." })
  }
}

const excluirAnimal = async (req, res) => {
  const id_produtor = req.produtor.id
  const { id } = req.params
  try {
    const animal = await consultarDadosUnicos("controle_rebanho", {
      id,
      id_produtor
    })

    if (!animal) {
      return res
        .status(404)
        .json({ mensagem: "Cadastro de animal não encontrado." })
    }

    await excluirDados("controle_rebanho", { id })

    return res.status(200).json({ mensagem: `Cadastro de animal excluido.` })
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor." })
  }
}

module.exports = {
  cadastrarAnimal,
  atualizarAnimal,
  excluirAnimal,
  listaAnimal
}
