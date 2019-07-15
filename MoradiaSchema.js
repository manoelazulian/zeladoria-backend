const mongoose = require("mongoose");
// cada schema equivale collection
const Schema = mongoose.Schema;

const MoradiaSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    type: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    description: { type: String },
    relatos: []
})

module.exports = MoradiaSchema;
