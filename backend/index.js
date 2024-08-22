const express=  require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const db = require("./db/connection.js");
const pinRoute = require("./routes/pinRoute.js");
const userRoute = require("./routes/userRoute.js");

app.use(express.json());


app.use('/api/pins',pinRoute);
app.use('/api/user',userRoute);

app.listen(port,()=>{
    console.log(`sever is running at ${port}`);
})

