import { consulta } from "../database/conexao.js"

class JogadorRepository {
    create(jogador) {
        const sql = "INSERT INTO jogadores SET ?"
        return consulta(sql, jogador, "Não foi possível cadastrar")
    }
    
    findAll() {
        const sql = "SELECT * FROM jogadores;"
        return consulta(sql, "Não foi possível encontrar")
    }

    findById(id) {
        const sql = "SELECT * FROM jogadores WHERE id=?;"
        return consulta(sql, id, "Não foi possível encontrar")
    }

    update(jogador, id) {
        const sql = "UPDATE jogadores SET ? WHERE id=?;"
        return consulta(sql, [jogador, id], "Não foi possível atualizar")
    }

    delete(id) {
        const sql = "DELETE FROM jogadores WHERE id=?;"
        return consulta(sql, id, "Não foi possível remover")
    }
}

export default new JogadorRepository
