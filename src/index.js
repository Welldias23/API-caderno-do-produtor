require('dotenv').config()
const express = require('express')
const rotasProdutor = require('./routes/produtor')
const rotasPropriedade = require('./routes/propriedade')
const rotasControlePluviometrico = require('./routes/controlePluviometrico')
const rotasControleLeiteiro = require('./routes/controleLeiteiro')
const rotasControleLeiteiroIndividual = require('./routes/controleLeiteiroIndividual')
const rotasControleNascimentos = require("./routes/controleNascimentos")

const PORTA = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.use(rotasProdutor)
app.use(rotasPropriedade)
app.use(rotasControlePluviometrico)
app.use(rotasControleLeiteiro)
app.use(rotasControleLeiteiroIndividual)
app.use(rotasControleNascimentos)

app.listen(PORTA)
