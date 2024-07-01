import express from 'express'

import conexao from '../infra/conexao.js'

const app = express()

// Indicara para o express ler body do json
app.use(express.json())

// Função de busca por id
function buscarGamePorId(id) {
    return listaGames.filter( game => game.id == id)
}

// Função de busca da posição na lista
function buscarIndexGame(id) {
    return listaGames.findIndex( game => game.id == id )
}

// Rotas
// Método CREATE
app.post('/games', (req, res) => {
    // listaGames.push(req.body)
    // res.status(201).send('Game adicionado com sucesso!')
    const game = req.body
    const sql = "INSERT INTO games SET ?;"
    conexao.query(sql, game, (error, result) => {
        if(error) {
            res.status(404).json({ 'error': error})
        } else {
            res.status(201).json(result)
        }
    })
})

// Métodos READ
app.get('/games', (req, res) => {
    // res.status(200).send(listaGames)
    const sql = "SELECT * FROM games;"
    conexao.query(sql, (error, result) => {
        if(error) {
            res.status(404).json({ 'error': error})
        } else {
            res.status(200).json(result)
        }
    })
})

app.get('/games/:id', (req, res) => {
    // res.json(buscarGamePorId(req.params.id))
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
})

// Método UPDATE
app.put('/games/:id', (req, res) => {
    // let index = buscarIndexGame(req.params.id)
    // listaGames[index].nome = req.body.nome
    // listaGames[index].trofeus = req.body.trofeus
    // res.json(listaGames)
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
})

// Método DELETE
app.delete('/games/:id', (req, res) => {
    // let index = buscarIndexGame(req.params.id)
    // listaGames.splice(index, 1)
    // res.send(`Game com id ${req.params.id} excluído com sucesso!`)
    const id = req.params.id
    const sql = "DELETE FROM games WHERE id=?;"
    conexao.query(sql, id, (error, result) => {
        if(error) {
            res.status(404).json({ 'error': error})
        } else {
            res.status(200).json(result)
        }
    })
})

export default app
