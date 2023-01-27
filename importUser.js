const express = require('express');
const {users} = require('./data/dataUser');
const { User } = require('./models/userModel');

const user = express.Router();

user.post('/user', async (req, res)=>{
    const result = await User.insertMany(users)
    res.send(result)
    console.log(users)
})

module.exports.user=user