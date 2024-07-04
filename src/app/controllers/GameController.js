import conexao from "../database/conexao.js"

class GameController {
    store(req, res) {
        const game = req.body
        const sql = "INSERT INTO games SET ?;"
        conexao.query(sql, game, (error, result) => {
            if(error) {
                res.status(404).json({ 'error': error})
            } else {
                res.status(201).json(result)
            }
        })
    }

    index(req, res) {
        const sql = "SELECT * FROM games;"
        conexao.query(sql, (error, result) => {
            if(error) {
                res.status(404).json({ 'error': error})
            } else {
                res.status(200).json(result)
            }
        })
    }

    show(req, res) {
        const id = req.params.id
        const sql = "SELECT * FROM games WHERE id=?;"
        conexao.query(sql, id, (error, result) => {
            const linha = result[0]
            if(error) {
                res.status(404).json({ 'error': error})
            } else {
                res.status(200).json(linha)
            }
        })
    }

    update(req, res) {
        const id = req.params.id
        const game = req.body
        const sql = "UPDATE games SET ? WHERE id=?;"
        conexao.query(sql, [game, id], (error, result) => {
            if(error) {
                res.status(404).json({ 'error': error})
            } else {
                res.status(200).json(result)
            }
        })
    }
    
    delete(req, res) {
        const id = req.params.id
        const sql = "DELETE FROM games WHERE id=?;"
        conexao.query(sql, id, (error, result) => {
            if(error) {
                res.status(404).json({ 'error': error})
            } else {
                res.status(200).json(result)
            }
        })
    }
}

// Padrão Singleton
export default new GameController()
