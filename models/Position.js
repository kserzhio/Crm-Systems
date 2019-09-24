const moongoose = require('mongoose')
const Schema = moongoose.Schema

const positionSchema = new Schema({
   name:{
       type:String,
       required:true
   },
    cost:{
       type:Number,
        required: true
    },
    category:{
       ref:'category',
        type:Schema.Types.ObjectId
    },
    user:{
       ref:'users',
        type:Schema.Types.ObjectId
    }
})

module.exports = moongoose.model('position',positionSchema)
