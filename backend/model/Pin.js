const mongoose = require("mongoose");
const PinSchema  = mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:3,
        max:30
    },
    title:{
        type:String,
        require:true,
        min:3
    }
    ,
    rating:{
        type:Number,
        require:true,
        min:0,
        max:5
    }
},
{timestamps:true});

module.exports = mongoose.model("PinMap",PinSchema);