import express from 'express'

const app = express()

// Indicara para o express ler body do json
app.use(express.json())

// Mock <-- Lista para testar funções
const listaGames = [
    {id: 1, nome: "Marvel's Spider-Man", trofeus: 74},
    {id: 2, nome: "God of War", trofeus: 37},
    {id: 3, nome: "Ratchet & Clank", trofeus: 47},
    {id: 4, nome: "The Last of Us Remastered", trofeus: 50},
    {id: 5, nome: "Horizon Zero Dawn", trofeus: 79}
]

// Função de busca por id
function buscarGamePorId(id) {
    return listaGames.filter( game => game.id == id)
}

// Função de busca da posição na lista
function buscarIndexGame(id) {
    return listaGames.findIndex( game => game.id == id )
}

// Criar rota padrão
app.get('/', (req, res) => {
    res.send('Ola Mundo!')
})

app.get('/games', (req, res) => {
    res.status(200).send(listaGames)
})

app.post('/games', (req, res) => {
    listaGames.push(req.body)
    res.status(201).send('Game adicionado com sucesso!')
})

app.get('/games/:id', (req, res) => {
    res.json(buscarGamePorId(req.params.id))
})

app.delete('/games/:id', (req, res) => {
    let index = buscarIndexGame(req.params.id)
    listaGames.splice(index, 1)
    res.send(`Game com id ${req.params.id} excluído com sucesso!`)
})

export default app
