const express = require('express');
const { User } = require('./models/userModel');
const jwt = require('jsonwebtoken')

const userRegister = express.Router();

const token = ((id) =>{
    jwt.sign({id}, '1234Ecommerce',{expiresIn: '1d'})
})

userRegister.post('/register', async (req,res) =>{
    const {name, email, password} = req.body;

    const userPresent = await User.findOne({email});

    if(userPresent){
        res.send({error: 'already created user'})
    }
    if(!userPresent){
    const user = await User.create({
        email, name, password
    })

    if(user){
        try{
        console.log(user)
        console.log('Created user !')
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            admin: user.admin,
            token: token(user._id)
        })}
        catch(error){console.log(error)}
    }}
})

userRegister.post('/login', async (req,res) =>{
    const {email, password} = req.body;
    console.log(password)
    const userPresent = await User.findOne({email});

    if(userPresent && await userPresent.comparePassword(password)){
        try{
        console.log(userPresent)
        console.log('User found !')
        res.json({
            _id: userPresent._id,
            name: userPresent.name,
            email: userPresent.email,
            admin: userPresent.admin,
            token: null,
            createdAt: userPresent.createAt
        })}
        catch(error){console.log(error)}
    }
})

module.exports.userRegister = userRegister