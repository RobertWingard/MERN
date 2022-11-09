// this is where we do the CRUD
// get the model to make queries


const Product = require("../models/products")

module.exports = {


    //READ ALL HERE
    findAll: (req, res) => {
        Product.find()
            .then(allDaProducts => {
                res.json(allDaProducts)
            })
            .catch(err => res.json(err))
    },
    //CREATE HERE
    create: (req, res) => {
        Product.create(req.body)
            .then(newProduct => {
                res.json(newProduct)
            })
            .catch(err => res.json(err))
    },

    //FIND ONE
    findOne: (req, res) => {
        Product.findById(req.params.id)
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json(err))
    },

    // UPDATE
    update: (req, res) => {
        console.log("update Id:", req.params.id)
        console.log("req.body:", req.body)
        Product.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err))
    },

    //DELETE
    delete: (req, res) => {
        Product.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
    }
}