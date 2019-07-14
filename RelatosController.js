const { connect } = require('./MoradiaRepository');
const Relato = require('./RelatoModel');

connect();

const index = () => {
  return Relato.where('_id').ne(null)
}

const create = (params) => {
  let relato = new Relato(params)
  relato.save(function (err) {});

  return relato
}

const remove = (id) => {
  relatos.pratosFa = getAll().filter((comida) => {
    return comida.id !== id
  })
}

const update = (id, comida) => {
  let comidaCadastrada = getAll().find(comida => {
    return comida.id === id
  })

  if(comidaCadastrada === undefined){ // nao encontrou a moradia
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