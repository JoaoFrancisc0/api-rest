import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'admin',
    database: 'bd_games'
})

conexao.connect()

export const consulta = (sql, valores='', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (error, result) => {
            if(error) return reject(mensagemReject)
            // Convertendo o JSON em texto
            const row = JSON.parse(JSON.stringify(result))
            return resolve(row)
        })  
    })
}

export default conexao
