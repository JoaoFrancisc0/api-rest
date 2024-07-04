import express from 'express'
import routes from './routes.js'

const app = express()

// Indicara para o express ler body do json
app.use(express.json())

// Usar o Router
app.use(routes)

export default app
