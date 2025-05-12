const {model} = require("mongoose");  
const {PositionSchema} = require("../schemas/PositionsSchema");

const PositionsModel = new model("Position", PositionSchema);

module.exports = PositionsModel;