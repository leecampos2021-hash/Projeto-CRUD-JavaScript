import express from 'express'
import routes from './routes.js'
import { sequelize } from './database/database.js'

const app = express()

app.use(express.json())
app.use('/filmes', routes)

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
  })
})