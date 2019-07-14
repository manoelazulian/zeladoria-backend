const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const controller = require('./MoradiasController')

const servidor = express()
servidor.use(cors())
servidor.use(bodyParser.json())

servidor.get('/moradias', async (request, response) => {
  let moradias = await controller.index()
  await console.log(moradias)
  await response.status(200).send(moradias)
})

servidor.post('/moradias', (request, response) => {
  const novaMoradia = controller.create(request.body)
  response.status(200).send(novaMoradia)
})

servidor.patch('/moradias/:id', (request, response) => {
  const id = request.params.id
  const sucesso = controller.update(id, request.body)
  if(sucesso){
    response.sendStatus(204)
  } else {
    response.sendStatus(404)
  }
})

servidor.delete('/moradias/:id', (request, response) => {
  controller.remove(request.params.id)
  response.sendStatus(204)
})

servidor.listen(3000)
console.log("servidorzinho rodando na porta 3000")
