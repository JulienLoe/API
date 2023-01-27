const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    product: [{
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

        quantity:{
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
    
    }],
    price:{
        type: Number,
        require: true
    },
    tva:{
        type: Number,
        required: true
    },
    shipping:{
        type: Number,
        required: true
    },
    total:{
        type: Number,
        required: true
    }
})

const Order =  mongoose.model('orders', orderSchema)

module.exports.Order = Order