const mongoose = require("mongoose")

const Store = new mongoose.Schema({
    owner: { type: mongoose.Types.ObjectId, ref: 'user', require: true },
    shortID: { type: String, require: true, unique: true },
    description: { type: String, require: false },
    name: { type: String, require: true, unique: true },
    logo: { type: String },
}, {
    timestamps: true
})

module.exports = mongoose.model('store', Store)
