const express=require('express');//to build backend quickly
const app=express();//insance of express
const cors=require('cors');//for cross origin policy
const PORT =8745;
app.use(cors());//use this cors package when server starts up
app.use(express.json());//to parse json data
app.use(express.urlencoded({extended:true}));//to parse urlencoded
app.use(express.static('public'));//to serve static files
//dB
require ('./dB connection')//mongoose Db connection folder is called here when server starts up

app.listen(PORT, ()=>{
 console.log(`server is running on port ${PORT}`);
})

