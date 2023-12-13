const jwt = require("jsonwebtoken")

const gerarToken = (dados, tempo) => {
  const token = jwt.sign(dados, process.env.SENHA_JWT, { expiresIn: tempo })
  return token
}

const verificarToken = (token) => {
  const tokenAverificar = jwt.verify(token, process.env.SENHA_JWT)
  return tokenAverificar
}

module.exports = {
  gerarToken,
  verificarToken
}
