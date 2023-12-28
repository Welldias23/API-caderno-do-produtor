require("dotenv").config()
const express = require("express")
const rotasProdutor = require("./routes/produtor")
const rotasPropriedade = require("./routes/propriedade")
const rotasControlePluviometrico = require("./routes/controlePluviometrico")
const rotasControleRebanho = require("./routes/controleRebanho")
const rotasControleLeiteiro = require("./routes/controleLeiteiro")
const rotasControleLeiteiroIndividual = require("./routes/controleLeiteiroIndividual")
const rotasControleNascimentos = require("./routes/controleNascimentos")
const rotasControleReprodutivo = require("./routes/controleReprodutivo")
const rotasControleSecagens = require("./routes/controleSecagens")
const rotasControlePesagens = require("./routes/controlePesagens")

const PORTA = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.use(rotasProdutor)
app.use(rotasPropriedade)
app.use(rotasControlePluviometrico)
app.use(rotasControleRebanho)
app.use(rotasControleLeiteiro)
app.use(rotasControleLeiteiroIndividual)
app.use(rotasControleNascimentos)
app.use(rotasControleReprodutivo)
app.use(rotasControleSecagens)
app.use(rotasControlePesagens)

app.listen(PORTA)
