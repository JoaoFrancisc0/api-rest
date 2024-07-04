import GameRepository from "../repositories/GameRepository.js"

class GameController {
    async store(req, res) {
        const game = req.body
        const row = await GameRepository.create(game)
        res.json(row)
    }

    async index(req, res) {
        const row = await GameRepository.findAll()
        res.json(row)
    }

    async show(req, res) {
        const id = req.params.id
        const row = await GameRepository.findById(id)
        res.json(row)
    }

    async update(req, res) {
        const id = req.params.id
        const game = req.body
        const row = await GameRepository.update(game, id)
        res.json(row)
    }
    
    async delete(req, res) {
        const id = req.params.id
        const row = await GameRepository.delete(id)
        res.json(row)
    }
}

// Padrão Singleton
export default new GameController()
