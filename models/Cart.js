// importing mongoose module
const mongoose = require('mongoose')
// import schema 
const Schema = mongoose.Schema;

let cartSchema = new Schema(
    {
        cartId :{
            type : String,
            default: "myCart"
        },
        products: [],
        numberOfProducts: {
            type: Number,
            default: 0
        },
        totalAmount :{
            type:Number,
            default:0
        }
    }
)

mongoose.model('Cart', cartSchema);