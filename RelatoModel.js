const RelatoSchema = require('./RelatoSchema');
const mongoose = require('mongoose');

const relatoModel = mongoose.model("moradia", RelatoSchema);

module.exports = relatoModel;  

