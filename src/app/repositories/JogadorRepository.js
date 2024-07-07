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

    findByNick(nick) {
        const sql = "SELECT * FROM jogadores WHERE nick=?;"
        return consulta(sql, nick, "Não foi possível encontrar")
    }

    update(jogador, nick) {
        const sql = "UPDATE jogadores SET ? WHERE nick=?;"
        return consulta(sql, [jogador, nick], "Não foi possível atualizar")
    }

    delete(nick) {
        const sql = "DELETE FROM jogadores WHERE nick=?;"
        return consulta(sql, nick, "Não foi possível remover")
    }
}

export default new JogadorRepository
