import express from 'express'
import GameController from './app/controllers/GameController.js'

const app = express()

// Indicara para o express ler body do json
app.use(express.json())

// Rotas
// Método CREATE
app.post('/games', GameController.store)

// Métodos READ
app.get('/games', GameController.index)

app.get('/games/:id', GameController.show)

// Método UPDATE
app.put('/games/:id', GameController.update)

// Método DELETE
app.delete('/games/:id', GameController.delete)

export default app
