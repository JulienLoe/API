const express = require('express')
const {products} = require('./data/dataProducts.js')
const { Product } = require('./models/products.js')

const importDataProducts = express.Router()

importDataProducts.post('/products', async (req,res) =>{
     console.log(products)
    await Product.deleteMany({})
    console.log('OK')
    const result = await Product.insertMany(products)
    res.send(result)
})

module.exports.importDataProducts = importDataProducts