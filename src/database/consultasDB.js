const knex = require("./conexao")

const cadastroDB = (tabela, dados) => {
    const dadosCadastrados = knex(tabela).insert(dados).returning("*")
    return dadosCadastrados

}

const consultaDB = (tabela, coluna) => {
    const dadosEncotrados = knex(tabela).where(coluna).first()
    return dadosEncotrados

}

module.exports = {
    cadastroDB,
    consultaDB
}