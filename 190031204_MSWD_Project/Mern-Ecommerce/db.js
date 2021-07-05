const mongoose=require("mongoose");
 

var mongoDBURL='mongodb+srv://saijyothi:saijyothi@cluster0.tohkl.mongodb.net/mern-ecommerce'

mongoose.connect(mongoDBURL,{useUnifiedTopology:true,useNewUrlParser:true})

var dbconnect=mongoose.connection

dbconnect.on('error',()=>{
    console.log('Mongodb connection failed');
})
dbconnect.on('connected',()=>{
    console.log('Mongodb connection Successful');
})

module.exports=mongoose