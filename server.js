import app from './src/app.js'

import conexao from './infra/conexao.js'

const PORT = 3000

// Fazer a conexão
conexao.connect((error) => {
    if(error) {
        conexao.log(error)
    }
    else {
        console.log("Conexão realizada com sucesso!")
        // Escutar porta 3000
        app.listen(PORT, () => {
            console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
        })
    }
})
