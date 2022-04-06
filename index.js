const express = require('express')
const dotenv = require('dotenv')
const database = require('./server/config/database')
const routes = require('./server/routers/index.routers')

const app = express()

dotenv.config()
database()
app.use(express.json());

app.use('/api/users', routes)

app.listen(3000, () => {
    console.log('Servidor iniciado com sucesso!')
})