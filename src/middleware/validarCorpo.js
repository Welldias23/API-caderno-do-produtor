const validarCorpo = (schemas) => async (req, res, next) => {
  try {
    await schemas.validateAsync(req.body)
    next()
  } catch (error) {
    return res.status(400).json({ mensagem: error.message })
  }
}

module.exports = {
  validarCorpo
}
