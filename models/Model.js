// importing mongoose module
const mongoose = require('mongoose')
// import schema 
const Schema = mongoose.Schema;

let productSchema = new Schema(
    {
        prodId: {
            type: String,
            unique: true
        },
        title: {
            type: String,
            default: 'product name'
        },
        description: {
            type: String,
            default: 'This is a new product'
        },
        category: {
            type: String,
            default: ''
        },
        isAvailable: {
            type: Boolean,
            default: true
        },
        price :{
            type:Number,
            default:0
        }
    }
)

mongoose.model('Model', productSchema);