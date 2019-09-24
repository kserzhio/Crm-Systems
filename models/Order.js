const moongoose = require('mongoose')
const Schema = moongoose.Schema

const orderSchema = new Schema({
    email:{
        type: Date,
        default: Date.now
    },
    order:{
        type:Number,
        required: true
    },
    list:[
        {
            name:{
                type:String
            },
            quantity:{
                type:Number
            },
            cost:{
                type:Number
            }
        }
    ],
    user:{
        ref:'users',
        type:Schema.Types.ObjectId
    }
})

module.exports = moongoose.model('orders',orderSchema)
