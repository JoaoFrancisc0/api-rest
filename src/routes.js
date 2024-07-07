import { Router } from 'express'
import JogadorController from './app/controllers/JogadorController.js'

const router = Router()

// Rotas
// Método CREATE
router.post('/jogadores', JogadorController.store)
// Métodos READ
router.get('/jogadores', JogadorController.index)
router.get('/jogadores/:nick', JogadorController.show)
// Método UPDATE
router.put('/jogadores/:nick', JogadorController.update)
// Método DELETE
router.delete('/jogadores/:nick', JogadorController.delete)

export default router
