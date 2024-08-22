const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const url  ="mongodb://localhost:27017/demo";

const connection =  mongoose.connect(url,{useNewUrlParser:true}).
then(()=>{
    console.log("Success");
}).catch((err)=>{
    console.log(err);
})