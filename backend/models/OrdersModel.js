const {model} = require("mongoose");  
const {OrdersSchema} = require("../schemas/OrdersScehma");

const OrdersModel = new model("Order", OrdersSchema);

module.exports = OrdersModel;
