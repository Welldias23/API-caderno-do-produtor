require('dotenv').config()
const express = require('express')
const rotasProdutor = require('./routes/produtor')
const rotasPropriedade = require('./routes/propriedade')
const rotasControlePluviometrico = require('./routes/controlePluviometrico')
const rotasControleLeiteiro = require('./routes/controleLeiteiro')

const PORTA = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.use(rotasProdutor)
app.use(rotasPropriedade)
app.use(rotasControlePluviometrico)
app.use(rotasControleLeiteiro)

app.listen(PORTA)
