const moongoose = require('mongoose')
const Schema = moongoose.Schema

const categorySchema = new Schema({
    name:{
        type: String,
        required : true
    },
    imgSrc:{
        type:String,
        default: ''
    },
    user:{
        ref:'users',
        type:Schema.Types.ObjectId
    }
})

module.exports = moongoose.model('categories',categorySchema)
