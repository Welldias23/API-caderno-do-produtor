const knex = require("./conexao")

const cadastrarDados = (tabela, dados) => {
  const dadosCadastrados = knex(tabela).insert(dados).returning("*")
  return dadosCadastrados
}

const consultarDadosUnicos = (tabela, coluna) => {
  const dadosEncotrados = knex(tabela).where(coluna).first()
  return dadosEncotrados
}

const consultarDadosLista = (tabela, coluna) => {
  const dadosEncotrados = knex(tabela).where(coluna)
  return dadosEncotrados
}

const atualizarDados = (tabela, coluna, dados) => {
  const dadosAtualizados = knex(tabela).where(coluna).update(dados)
  return dadosAtualizados
}

const excluirDados = (tabela, coluna) => {
  const dadosExcluidos = knex(tabela).where(coluna).del().returning("*")
  return dadosExcluidos
}

module.exports = {
  cadastrarDados,
  consultarDadosUnicos,
  consultarDadosLista,
  atualizarDados,
  excluirDados
}
