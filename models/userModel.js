const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },

    email:{
        type: String,
        require: true
    },
    
    password:{
        type: String,
        require: true
    },

    admin:{
        type: Boolean,
        require: true
    }
})

userSchema.set('timestamps', true)

userSchema.methods.comparePassword = async function (loginPassword) {
    return await bcrypt.compare(loginPassword, this.password)
}


userSchema.pre('save', async function (){
    const salt = await bcrypt.genSalt(10)
    if(this.isModified('password')) 
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('users', userSchema);

module.exports.User = User