const { connect } = require('./MoradiaRepository');
const Moradia = require('./MoradiaModel');

connect();

const index = () => {
  let moradia = Moradia.find({})
  return moradia
}

const show = async (code) => {
  return Moradia.find({ code: code }, (err, moradia) => {
    return moradia
  })
}

const create = (params) => {
  console.log(params)
  let moradia = new Moradia(params)
  moradia.save(function (err) { console.log(err)});

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
  show,
  create,
  remove,
  update
}
