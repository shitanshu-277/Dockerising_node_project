const express=require('express');
const app=express();
const dotenv = require('dotenv');
dotenv.config();

app.get('/home',(req,res)=>{
    res.json({message:"ok"});
});

app.listen(process.env.PORT,()=>{
    console.log("server is listening on port 3000");
}); 