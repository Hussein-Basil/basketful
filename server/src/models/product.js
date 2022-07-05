const mongoose = require("mongoose")

const Product = new mongoose.Schema({
    name: { type: String, require: true },
    description: { type: String, require: false },
    store: { type: mongoose.Types.ObjectId, ref: 'store', require: true },
    category: { type: mongoose.Types.ObjectId, ref: 'category', require: true },
    discount: { type: mongoose.Types.ObjectId, ref: 'discount', require: false },
    price: { type: Number, require: true },
    image: { type: String, require: true },
    stockQuantity: { type: Number, require: true },
}, {
    timestamps: true
})

module.exports = mongoose.model("product", Product)