const express = require('express');

const {Order} = require('./models/orderModel')

const order = express.Router()

order.post('/order', async(req,res)=>{
    console.log('OK')
    const{
        user,
        dispatch,
        cart,
        elementPrice,
        tva,
        shipping,
        total
    } =req.body

const orderlist= new Order({
        user: user._id,
        dispatch,
        product: cart,
        price: elementPrice,
        tva,
        shipping,
        total
})
const createOrder = await orderlist.save()
res.json(createOrder)
}
)

order.get('/:id', async(req,res)=>{
    console.log(req.params.id)
    const result = await Order.findById(req.params.id)
    if(result){
        console.log('yes')
        res.json(result);
    }
})

module.exports.order = order