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
        const nick = req.params.nick
        const row = await JogadorRepository.findByNick(nick)
        res.json(row)
    }

    async update(req, res) {
        const nick = req.params.nick
        const jogador = req.body
        const row = await JogadorRepository.update(jogador, nick)
        res.json(row)
    }
    
    async delete(req, res) {
        const nick = req.params.nick
        const row = await JogadorRepository.delete(nick)
        res.json(row)
    }
}

// Padrão Singleton
export default new JogadorController()
