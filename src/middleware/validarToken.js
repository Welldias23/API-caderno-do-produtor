const { verificarToken } = require("../core/jwt")

const validarToken = (req, res, next) => {
    const {authorization} = req.headers

    if (!authorization) {
        return res.status(401).json({mensagem: "O produtor não esta logado."})
    } 

    try {
        const token = authorization.split(" ")[1]
        const produtor = verificarToken(token)
        req.produtor = produtor
        next()
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({mensagem: "O produtor não esta logado."})
        }
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({mensagem: "O produtor não esta logado."})
        }
        return  res.status(500).json({ mensagem: "Erro interno do servidor." })
    }
}

module.exports = validarToken