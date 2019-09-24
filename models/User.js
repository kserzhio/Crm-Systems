const moongoose = require('mongoose')
const Schema = moongoose.Schema

const userSchema = new Schema({
    email:{
        type: String,
        required : true,
        unique:true
    },
    password:{
        type:String,
        required: true
    }
})

module.exports = moongoose.model('users',userSchema)
