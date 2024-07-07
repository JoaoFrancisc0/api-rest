import JogadorRepository from "../repositories/JogadorRepository.js"

class JogadorController {
    async store(req, res) {
        const jogador = req.body
        const row = await JogadorRepository.create(jogador)
        res.json(row)
    }

    async index(req, res) {
        const row = await JogadorRepository.findAll()
        res.json(row)
    }

    async show(req, res) {
        const id = req.params.id
        const row = await JogadorRepository.findById(id)
        res.json(row)
    }

    async update(req, res) {
        const id = req.params.id
        const jogador = req.body
        const row = await JogadorRepository.update(jogador, id)
        res.json(row)
    }
    
    async delete(req, res) {
        const id = req.params.id
        const row = await JogadorRepository.delete(id)
        res.json(row)
    }
}

// Padrão Singleton
export default new JogadorController()
