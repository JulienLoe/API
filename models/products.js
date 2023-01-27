const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },

    description:{
        type: String,
        require: true
    },

    price:{
        type: Number,
        require: true
    },

    numberInStock:{
        type: Number,
        require: true
    },

    image:{
        type: String,
        require: true
    },

    size:{
        type: String,
        require: true
    }

})

const Product = mongoose.model('products', productSchema)

module.exports.Product = Product