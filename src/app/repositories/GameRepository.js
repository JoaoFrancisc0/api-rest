import conexao from "../database/conexao.js"

class GameRepository {
    // Tive que usar o Promise pq o dizia que dava problema com o res
    create(game) {
        const sql = "INSERT INTO games SET ?"
        return new Promise((resolve, reject) => {
            conexao.query(sql, game, (error, result) => {
                if(error) return reject("Não foi possível cadastrar")
                // Convertendo o JSON em texto
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })  
        })
    }
    
    findAll() {
        const sql = "SELECT * FROM games;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, (error, result) => {
                if(error) return reject("Não foi possível localizar")
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    findById(id) {
        const sql = "SELECT * FROM games WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (error, result) => {
                if(error) return reject("Não foi possível localizar")
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    update(game, id) {
        const sql = "UPDATE games SET ? WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, [game, id], (error, result) => {
                if(error) return reject("Não foi possível atualizar")
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    delete(id) {
        const sql = "DELETE FROM games WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (error, result) => {
                if(error) return reject("Não foi possível deletar")
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }
}

export default new GameRepository
