require('dotenv').config()
const express = require('express')
const rotas = require('./routes/rotas')

const PORTA = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.use(rotas)

app.listen(PORTA)
