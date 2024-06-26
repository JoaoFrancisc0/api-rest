import express from 'express'

const app = express()

// Mock <-- Lista para testar funções
const listaJogos = [
    {id: 1, nome: "Marvel's Spider-Man", trofeus: 74},
    {id: 2, nome: "God of War", trofeus: 37},
    {id: 3, nome: "Ratchet & Clank", trofeus: 47},
    {id: 4, nome: "The Last of Us Remastered", trofeus: 50},
    {id: 5, nome: "Horizon Zero Dawn", trofeus: 79}
]

// Criar rota padrão
app.get('/', (req, res) => {
    res.send('Ola Mundo!')
})

app.get('/games', (req, res) => {
    res.status(200).send(listaJogos)
})

export default app
