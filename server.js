const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const moradiasController = require('./MoradiasController')
const Moradia = require('./MoradiaModel');

const servidor = express()
servidor.use(cors())
servidor.use(bodyParser.json())

servidor.get('/moradias', async (request, response) => {
  let moradias = await moradiasController.index()
  response.status(200).send(moradias)
})

servidor.get('/moradias/:code', (request, response) => {
  const code = request.params.code
  moradiasController.show(code).then(moradia => {
    if(!moradia) {
        response.sendStatus(404)
      } else {
        response.send(moradia)
      }
  })
})

servidor.post('/moradias', (request, response) => {
  const novaMoradia = moradiasController.create(request.body)
  response.status(201).send(novaMoradia)
})

servidor.patch('/moradias/:id', (request, response) => {
  const id = request.params.id
  const sucesso = moradiasController.update(id, request.body)
  if(sucesso){
    response.sendStatus(204)
  } else {
    response.sendStatus(404)
  }
})

servidor.delete('/moradias/:id', (request, response) => {
  moradiasController.remove(request.params.id)
  response.sendStatus(204)
})

servidor.listen(3000)
console.log("servidorzinho rodando na porta 3000")
