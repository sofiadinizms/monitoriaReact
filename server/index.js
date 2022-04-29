const express = require('express');
const app = express()

app.use(express.json())

const pokemons = [
  {id: 1, name: 'Pokemon1', type: 1, attack: 'Ataque1', damage: 1, hp:1},
  {id: 2, name: 'Pokemon2', type: 2, attack: 'Ataque2', damage: 2, hp:2},
  {id: 3, name: 'Pokemon3', type: 3, attack: 'Ataque3', damage: 3, hp:3},
  {id: 4, name: 'Pokemon4', type: 4, attack: 'Ataque4', damage: 4, hp:4},
  {id: 5, name: 'Pokemon5', type: 5, attack: 'Ataque5', damage: 5, hp:5}
];


app.get('/api', (req, res) => {
  res.json({"pokemons":["Pokemon1", "Pokemon2", "Pokemon3"]})
})

app.get('/:id', (request, response) => {
  const pokemon = pokemons.find(c => c.id == parseInt(request.params.id))
  try {
    response.send(pokemon)
  } catch (error) {
    return response.status(404).send('The pokemon with the given ID was not found')
  }
})

app.post('/', (request, response) => {
  if (!request.body.name || !request.body.type || !request.body.attack || !request.body.damage || !request.body.hp) {
    response.status(400).send('Preencha todos os campos')
    return;
  }
  const pokemon = {
    id: pokemons.length + 1,
    name: request.body.name,
    type: request.body.type,
    attack: request.body.attack,
    damage: request.body.damage,
    hp: request.body.hp
  }
  pokemons.push(pokemon)
  return response.send(pokemons)
})

app.put('/:id', (request, response) => {
  const pokemon = pokemons.find(c => c.id === parseInt(request.params.id));
  if (!pokemon) return response.status(404).send('Não foi encontrado um curso com esse ID')

  if (!request.body.name || !request.body.type || !request.body.attack || !request.body.damage || !request.body.hp) {
    response.status(400).send('Preencha todos os campos')
    return;
  }

  pokemon.name = request.body.name
  pokemon.type = request.type
  pokemon.attack = request.attack
  damage = request.damage
  hp = request.hp

  response.send(pokemon)
})

app.delete('/:id', (request, response) => {
  const pokemon = pokemons.find(c => c.id === parseInt(request.params.id));
  if (!pokemon) return response.status(404).send('Não foi encontrado um curso com esse ID')

  const index = pokemons.indexOf(pokemon);
  pokemons.splice(index, 1)

  response.send(pokemons)
})

const port = 5000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
})