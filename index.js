const express = require('express');
const PORT = 8080;
const app = express();
require('dotenv').config();
const configDB = require('./configDB/configDB.js')
const Product = require('./models/products')
const cors = require('cors');
const { importDataProducts } = require('./importData.js');
const {user} = require('./importUser')
const {userRegister} = require('./register');
const { order } = require('./order.js');

app.use(express.json());

app.use(cors({origin:'http://localhost:3000'}))

console.log(Product.Product)

configDB.connectDB();

app.use('/import', importDataProducts)

app.use('/import', user)

app.use('/user', userRegister)

app.use('/order', order)

app.get('/products', (req, res) =>{
    Product.Product.find()
    .then((result)=>res.json(result))
})

app.get('/products/:id', (req, res) =>{
    console.log(req.params)
    console.log(req.params.id)
    Product.Product.findById(req.params.id)
    .then((result)=>res.json(result))
})

app.post('/', (req, res) =>{
    const newProduct = new Product.Product(req.body)
    newProduct.save(() => console.log('Add new product !'));
    res.send();
})

app.get('/',(req, res) =>{
      res.send("API")
})

app.listen(PORT, console.log(`Serveur démarré au port ${PORT} !`));
