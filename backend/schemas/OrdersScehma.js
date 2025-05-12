const {Schema} = require("mongoose");

const HoldingSchema = new Schema({
    name:String,
    qty:Number,
    price:Number,
    mode:String,
    
});

module.exports = {OrdersSchema};