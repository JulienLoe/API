const mongoose = require('mongoose');

const connectDB = () => {
    try{
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env, {useNewUrlParser: true, useUnifiedTopology: true})
    
    mongoose.connection.on('open', () =>{console.log('Connecté à la DB !')})
    }
    catch{
        (error)=>console.log(error)
    }
};

module.exports.connectDB = connectDB