const mongoose = require("mongoose");
// cada schema equivale collection
const Schema = mongoose.Schema;

const RelatoSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    description: { type: String, required: true },
})

module.exports = RelatoSchema;  QQ     Qq 