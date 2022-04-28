const express = require('express');
const app = express()

// app.use(express.json())

// const pokemons = [
//   {id: 1, name: 'Esgenharia de Software', semester: 4, professor: 'Vinicius Cardoso Garcia'},
//   {id: 2, name: 'Banco de Dados', semester: 4, professor: 'Robson Fidalgo'},
//   {id: 3, name: 'Gestão de Processo de Negócio', semester: 4, professor: 'Jéssyka Vilela'},
//   {id: 4, name: 'Planejamento e Gerenciamento de Projetos', semester: 4, professor: 'Alexandre Vasconcelos'},
//   {id: 5, name: 'Sistemas de Gestão Empresarial', semester: 4, professor: 'Simone Santos'}
// ];


app.get('/api', (req, res) => {
  res.json({"pokemons": [1,2,3,4,5]})
})

// app.get('/:id', (request, response) => {
//   const course = courses.find(c => c.id == parseInt(request.params.id))
//   try {
//     response.send(course)
//   } catch (error) {
//     return response.status(404).send('The course with the given ID was not found')
//   }
// })

// app.post('/', (request, response) => {
//   if (!request.body.name || !request.body.semester || !request.body.professor) {
//     response.status(400).send('Preencha todos os campos')
//     return;
//   }
//   const course = {
//     id: courses.length + 1,
//     name: request.body.name,
//     semester: request.body.semester,
//     professor: request.body.professor
//   }
//   courses.push(course)
//   return response.send(courses)
// })

// app.put('/:id', (request, response) => {
//   const course = courses.find(c => c.id === parseInt(request.params.id));
//   if (!course) return response.status(404).send('Não foi encontrado um curso com esse ID')

//   if (!request.body.name || !request.body.semester || !request.body.professor) {
//     response.status(400).send('Preencha todos os campos')
//     return;
//   }

//   course.name = request.body.name
//   course.semester = request.semester
//   course.professor = request.professor
//   response.send(course)
// })

// app.delete('/:id', (request, response) => {
//   const course = courses.find(c => c.id === parseInt(request.params.id));
//   if (!course) return response.status(404).send('Não foi encontrado um curso com esse ID')

//   const index = courses.indexOf(course);
//   courses.splice(index, 1)

//   response.send(courses)
// })

const port = 5000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
})