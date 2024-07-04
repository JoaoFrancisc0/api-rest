import { consulta } from "../database/conexao.js"

class GameRepository {
    // Tive que usar o Promise pq o dizia que dava problema com o res
    create(game) {
        const sql = "INSERT INTO games SET ?"
        return consulta(sql, game, "Não foi possível cadastrar")
    }
    
    findAll() {
        const sql = "SELECT * FROM games;"
        return consulta(sql, "Não foi possível encontrar")
    }

    findById(id) {
        const sql = "SELECT * FROM games WHERE id=?;"
        return consulta(sql, id, "Não foi possível encontrar")
    }

    update(game, id) {
        const sql = "UPDATE games SET ? WHERE id=?;"
        return consulta(sql, [game, id], "Não foi possível atualizar")
    }

    delete(id) {
        const sql = "DELETE FROM games WHERE id=?;"
        return consulta(sql, id, "Não foi possível remover")
    }
}

export default new GameRepository
