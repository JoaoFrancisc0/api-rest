import { Router } from 'express'
import GameController from './app/controllers/GameController.js'

const router = Router()

// Rotas
// Método CREATE
router.post('/games', GameController.store)
// Métodos READ
router.get('/games', GameController.index)
router.get('/games/:id', GameController.show)
// Método UPDATE
router.put('/games/:id', GameController.update)
// Método DELETE
router.delete('/games/:id', GameController.delete)

export default router
