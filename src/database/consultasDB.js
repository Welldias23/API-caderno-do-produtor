const knex = require("./conexao")

const cadastroDB = (tabela, campo) => {
    const dadosCadastrados = knex(tabela).insert(campo).returning()
    return dadosCadastrados

}

const consultaDB = (tabela, campo) => {
    const dadosEncotrados = knex(tabela).where(campo).first()
    return dadosEncotrados

}

module.exports = {
    cadastroDB,
    consultaDB
}