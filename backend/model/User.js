const mongoose = require("mongoose");
const UserSchema  = mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:3,
        max:30
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        min:6,
        max:20
    },

},
{timestamps:true});

module.exports = mongoose.model("MapUser",UserSchema);