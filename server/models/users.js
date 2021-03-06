const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
    firstName: {type: String, required:true},
    lastName: {type: String, required:true},
    email: {type: String, required:true},
    gender:{type: String, required:true},
    usernName: {type: String, required:true},
    password: {type: String, required:true},
    isActive:{type:Boolean, default:true}
})

const User =  mongoose.model('users', userSchema)

module.exports = User