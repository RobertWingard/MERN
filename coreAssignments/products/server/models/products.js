const mongoose = require('mongoose')

// the schema 
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} must be there"],
        minlength: [3, "{PATH must be at least 3 chars long"]
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
}, {timestamps: true})


// create the schema and export it
const Product = mongoose.model("Product", ProductSchema)
module.exports = Product