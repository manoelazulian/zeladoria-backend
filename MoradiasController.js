const { connect } = require('./MoradiaRepository');
const Moradia = require('./MoradiaModel');

connect();

const index = () => {
  Moradia.find({}).then((moradias) => {
    return moradias
  });
}

const create = (params) => {
  let moradia = new Moradia(params)
  moradia.save(function (err) {});

  return moradia
}

const remove = (id) => {
  Moradia.deleteOne({id: id}, function (err) { return false })
  return true
}

const update = (id, moradia) => {
  return Moradia.findOneAndUpdate({id: id}, moradia, function (err) { return false })
}

module.exports = {
  index,
  create,
  remove,
  update
}