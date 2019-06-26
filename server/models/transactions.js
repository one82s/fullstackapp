const mongoose = require('mongoose')
const Schema = mongoose.Schema

let transactionSchema = new Schema({
    userId: mongoose.SchemaTypes.ObjectId,
    productId: {type: String, required:true},
    productName: {type: String, required:true},
    amount: {type: Number, default:0}
})

const Transaction =  mongoose.model('Transaction', transactionSchema)

module.exports = Transaction