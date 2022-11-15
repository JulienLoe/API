const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 8080;
const LOG = process.env.LOGINDB;
const url_db = `mongodb+srv://JulienLoe:${LOG}@cluster0.vlw1bje.mongodb.net/?retryWrites=true&w=majority`;
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const planetSchema = new Schema({
    type: {type: String,
    required: true},
    name: {type: String,
    required: true},
    diameter: {type: Number,
    required: true},
    mass: {type: Number,
    required: true},
    description: {type: String,
    required: true}
}, {timestamps: true});
const Planet = mongoose.model('Planet', planetSchema)

app.use(cors({
    origin: 'http://localhost:3000'
}))


mongoose.connect(url_db)
.then(() =>{
    app.listen(PORT, () => {console.log(`Application démarrée au port ${PORT}`)})
    console.log("Connecté à la DB")})
.catch((err) =>{console.log(err)})

app.use(express.json())

app.post('/API', (req,res) =>{
const planet = new Planet(req.body)
planet.save()
.then(result =>{
    console.log('Envoyé sur la DB !')})
.catch((err) =>{console.log(err)})  
})


 app.get('/planets', (req,res) =>{
     Planet.find()
     .then((result) => {
        res.send(result);
     })
     .then(() =>{
         console.log("Données envoyées")
     })
     .catch((err)=>{console.log(err)})
 })

 app.delete('/planets/:id', (req,res) =>{
 Planet.deleteOne({_id: req.params.id}).exec()
 res.send()
  .catch((err) => console.log(err))
//  id = req.params.id
//  console.log(id)
})

// app.get('/API', (req,res) =>{
//     Planet.find()
//     .then((result) =>{
//         res.send(result)
//     })
// })