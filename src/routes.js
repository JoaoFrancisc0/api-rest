import { Router } from 'express'
import JogadorController from './app/controllers/JogadorController.js'

const router = Router()

// Rotas
// Método CREATE
router.post('/jogadores', JogadorController.store)
// Métodos READ
router.get('/jogadores', JogadorController.index)
router.get('/jogadores/:id', JogadorController.show)
// Método UPDATE
router.put('/jogadores/:id', JogadorController.update)
// Método DELETE
router.delete('/jogadores/:id', JogadorController.delete)

export default router
