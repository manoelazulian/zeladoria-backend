const { connect } = require('./MoradiaRepository');
const Moradia = require('./MoradiaModel');

connect();

const index = () => {
  return Moradia.where('_id').ne(null)
}

const create = (params) => {
  let moradia = new Moradia(params)
  moradia.save(function (err) {});

  return moradia
}

const remove = (id) => {
  comidas.pratosFavoritos = getAll().filter((comida) => {
    return comida.id !== id
  })
}

const update = (id, comida) => {
  let comidaCadastrada = getAll().find(comida => {
    return comida.id === id
  })

  if(comidaCadastrada === undefined){ // nao encontrou a comida
    return false
  }
  else {
    if(comida.nome !== undefined) {
      comidaCadastrada.nome = comida.nome
    }
    if(comida.descricao !== undefined) {
      comidaCadastrada.descricao = comida.descricao
    }

    return true
  }
}

module.exports = {
  index,
  create,
  remove,
  update
}