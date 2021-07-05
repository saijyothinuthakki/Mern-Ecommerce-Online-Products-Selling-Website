const bodyParser = require('body-parser');
const express = require("express");
const app = express()

var userRoute=require('./routes/userRoute')
var dbconnection=require("./db")
var productsRoute=require("./routes/productsRoute")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/products/',productsRoute)
app.use('/api/users/',userRoute)


app.get("/",(req,res)=>{

    res.send('This is from backend');
});


const port=8000;

app.listen(port,() => console.log(`Node js server is started`));