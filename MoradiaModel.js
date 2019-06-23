const MoradiaSchema = require('./MoradiaSchema');
const mongoose = require('mongoose')

const moradiaModel = mongoose.model("moradia", MoradiaSchema);

module.exports = moradiaModel;

